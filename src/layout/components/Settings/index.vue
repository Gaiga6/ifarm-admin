<template>
  <el-drawer
    v-model="appStore.settingsDrawer"
    title="系统设置"
    :with-header="true"
    direction="rtl"
    size="320px"
    class="settings-drawer"
  >
    <div class="settings-content">
      <!-- 主题设置 -->
      <div class="setting-section">
        <div class="section-title">
          <el-icon><Sunny /></el-icon>
          <span>外观主题</span>
        </div>
        <div class="setting-item">
          <div class="item-label">主题模式</div>
          <div class="theme-switcher">
            <div 
              class="theme-option"
              :class="{ active: appStore.theme === 'light' }"
              @click="appStore.setTheme('light')"
            >
              <el-icon><Sunny /></el-icon>
              <span>浅色</span>
            </div>
            <div 
              class="theme-option"
              :class="{ active: appStore.theme === 'dark' }"
              @click="appStore.setTheme('dark')"
            >
              <el-icon><Moon /></el-icon>
              <span>深色</span>
            </div>
          </div>
        </div>
        
        <div class="setting-item">
          <div class="item-label">主题色彩</div>
          <div class="color-picker">
            <div 
              v-for="color in themeColors" 
              :key="color"
              class="color-item"
              :class="{ active: appStore.primaryColor === color }"
              :style="{ backgroundColor: color }"
              @click="appStore.setPrimaryColor(color)"
            >
              <el-icon v-if="appStore.primaryColor === color"><Check /></el-icon>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 布局设置 -->
      <div class="setting-section">
        <div class="section-title">
          <el-icon><Operation /></el-icon>
          <span>布局配置</span>
        </div>
        <div class="setting-item">
          <div class="item-content">
            <div class="item-info">
              <div class="item-label">侧边栏</div>
              <div class="item-desc">展开或收起左侧导航</div>
            </div>
            <el-switch 
              v-model="sidebarCollapsed"
              @change="appStore.setSidebarCollapsed($event)"
            />
          </div>
        </div>
        
        <div class="setting-item">
          <div class="item-content">
            <div class="item-info">
              <div class="item-label">标签栏</div>
              <div class="item-desc">显示页面访问历史</div>
            </div>
            <el-switch 
              v-model="tagsViewEnabled"
              @change="appStore.setTagsView({ enabled: $event })"
            />
          </div>
        </div>
        
        <div class="setting-item">
          <div class="item-content">
            <div class="item-info">
              <div class="item-label">面包屑</div>
              <div class="item-desc">显示页面路径导航</div>
            </div>
            <el-switch 
              v-model="breadcrumbEnabled"
              @change="appStore.setBreadcrumb({ enabled: $event })"
            />
          </div>
        </div>
      </div>
      
      <!-- 功能设置 -->
      <div class="setting-section">
        <div class="section-title">
          <el-icon><Tools /></el-icon>
          <span>功能配置</span>
        </div>
        <div class="setting-item">
          <div class="item-content">
            <div class="item-info">
              <div class="item-label">水印</div>
              <div class="item-desc">显示页面水印标识</div>
            </div>
            <el-switch 
              v-model="watermarkEnabled"
              @change="appStore.setWatermark({ enabled: $event })"
            />
          </div>
        </div>
        
        <div v-if="watermarkEnabled" class="setting-item">
          <div class="item-label">水印文字</div>
          <el-input 
            v-model="watermarkText"
            @change="appStore.setWatermark({ text: $event })"
            placeholder="请输入水印文字"
            size="small"
          />
        </div>
        
        <div v-if="watermarkEnabled" class="setting-item">
          <div class="item-label">
            <span>透明度</span>
            <span class="opacity-value">{{ Math.round(watermarkOpacity * 100) }}%</span>
          </div>
          <el-slider 
            v-model="watermarkOpacity"
            @change="appStore.setWatermark({ opacity: $event })"
            :min="0.05"
            :max="0.5"
            :step="0.05"
            :show-tooltip="false"
          />
        </div>
      </div>
      
      <!-- 语言设置 -->
      <div class="setting-section">
        <div class="section-title">
          <el-icon><Location /></el-icon>
          <span>语言设置</span>
        </div>
        <div class="setting-item">
          <el-select 
            v-model="language"
            @change="appStore.setLanguage($event)"
            style="width: 100%"
            size="default"
          >
            <el-option label="简体中文" value="zh-CN" />
            <el-option label="English" value="en-US" />
          </el-select>
        </div>
      </div>
    </div>
    
    <!-- 底部操作 -->
    <div class="settings-footer">
      <el-button @click="resetSettings" size="default" class="reset-btn">
        <el-icon><RefreshLeft /></el-icon>
        重置设置
      </el-button>
      <el-button type="primary" @click="saveSettings" size="default">
        <el-icon><Check /></el-icon>
        保存设置
      </el-button>
    </div>
  </el-drawer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useAppStore } from '@/stores'
import { 
  Sunny, Moon, Operation, Tools, Location, Check, RefreshLeft
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const appStore = useAppStore()

// 主题色彩选项
const themeColors = [
  '#A5D6A7', '#81C784', '#4CAF50', '#388E3C',
  '#1976D2', '#2196F3', '#03A9F4', '#00BCD4',
  '#FF9800', '#F57C00', '#E91E63', '#9C27B0'
]

// 计算属性
const sidebarCollapsed = computed({
  get: () => appStore.sidebarCollapsed,
  set: (val) => appStore.setSidebarCollapsed(val)
})

const tagsViewEnabled = computed({
  get: () => appStore.tagsView.enabled,
  set: (val) => appStore.setTagsView({ enabled: val })
})

const breadcrumbEnabled = computed({
  get: () => appStore.breadcrumb.enabled,
  set: (val) => appStore.setBreadcrumb({ enabled: val })
})

const watermarkEnabled = computed({
  get: () => appStore.watermark.enabled,
  set: (val) => appStore.setWatermark({ enabled: val })
})

const watermarkText = computed({
  get: () => appStore.watermark.text,
  set: (val) => appStore.setWatermark({ text: val })
})

const watermarkOpacity = computed({
  get: () => appStore.watermark.opacity,
  set: (val) => appStore.setWatermark({ opacity: val })
})

const language = computed({
  get: () => appStore.language,
  set: (val) => appStore.setLanguage(val)
})

// 重置设置
const resetSettings = () => {
  appStore.setSidebarCollapsed(false)
  appStore.setTheme('light')
  appStore.setPrimaryColor('#A5D6A7')
  appStore.setLanguage('zh-CN')
  appStore.setWatermark({ enabled: false, text: '农场认养管理系统', opacity: 0.15 })
  appStore.setTagsView({ enabled: true, cached: true, showIcon: true })
  appStore.setBreadcrumb({ enabled: true, showIcon: true })
  ElMessage.success('设置已重置')
}

// 保存设置
const saveSettings = () => {
  ElMessage.success('设置已保存')
  appStore.settingsDrawer = false
}
</script>

<style scoped>
.settings-drawer :deep(.el-drawer__header) {
  border-bottom: 1px solid var(--border-light);
  padding: 20px 24px 16px;
  margin-bottom: 0;
}

.settings-drawer :deep(.el-drawer__title) {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.settings-drawer :deep(.el-drawer__body) {
  padding: 0;
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
}

.settings-content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.setting-section {
  margin-bottom: 32px;
}

.setting-section:last-child {
  margin-bottom: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--primary-light);
}

.section-title .el-icon {
  color: var(--primary-color);
}

.setting-item {
  margin-bottom: 20px;
}

.setting-item:last-child {
  margin-bottom: 0;
}

.item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-info {
  flex: 1;
}

.item-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-desc {
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.4;
}

.opacity-value {
  font-size: 12px;
  color: var(--primary-color);
  font-weight: 600;
}

.theme-switcher {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.theme-option {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 8px;
  border: 2px solid var(--border-light);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--bg-primary);
}

.theme-option:hover {
  border-color: var(--primary-mid);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(165, 214, 167, 0.2);
}

.theme-option.active {
  border-color: var(--primary-color);
  background-color: var(--primary-light);
  color: var(--primary-dark);
}

.theme-option .el-icon {
  font-size: 20px;
}

.theme-option span {
  font-size: 12px;
  font-weight: 500;
}

.color-picker {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 12px;
}

.color-item {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  position: relative;
}

.color-item:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.color-item.active {
  border-color: var(--text-primary);
  transform: scale(1.1);
}

.color-item .el-icon {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.settings-footer {
  padding: 20px 24px;
  border-top: 1px solid var(--border-light);
  display: flex;
  gap: 12px;
  background-color: var(--bg-secondary);
}

.reset-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.settings-footer .el-button {
  flex: 1;
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
}

/* 自定义滚动条 */
.settings-content::-webkit-scrollbar {
  width: 4px;
}

.settings-content::-webkit-scrollbar-track {
  background: var(--bg-secondary);
  border-radius: 2px;
}

.settings-content::-webkit-scrollbar-thumb {
  background: var(--primary-mid);
  border-radius: 2px;
}

.settings-content::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}
</style> 