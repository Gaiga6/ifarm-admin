<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <!-- 首页始终显示 -->
    <el-breadcrumb-item>
      <router-link to="/dashboard" class="breadcrumb-link">首页</router-link>
    </el-breadcrumb-item>
    
    <!-- 动态面包屑 -->
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbList"
      :key="item.path"
    >
      <router-link
        v-if="index < breadcrumbList.length - 1"
        :to="item.path"
        class="breadcrumb-link"
      >
        {{ item.title }}
      </router-link>
      <span v-else class="breadcrumb-current">{{ item.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 生成面包屑列表
const breadcrumbList = computed(() => {
  const matched = route.matched.filter(item => item.meta && item.meta.title)
  const breadcrumbs = []
  
  matched.forEach(match => {
    // 跳过根路径和首页，因为我们已经手动添加了首页
    if (match.path !== '/' && match.path !== '/dashboard') {
      breadcrumbs.push({
        path: match.path,
        title: match.meta.title
      })
    }
  })
  
  return breadcrumbs
})
</script>

<style scoped>
.breadcrumb {
  font-size: 14px;
}

.breadcrumb :deep(.el-breadcrumb__separator) {
  color: var(--text-secondary);
  margin: 0 8px;
}

.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--primary-color);
}

.breadcrumb-current {
  color: var(--text-primary);
  font-weight: 500;
}

/* 响应式设计 - 小屏幕隐藏面包屑 */
@media (max-width: 768px) {
  .breadcrumb {
    display: none;
  }
}
</style> 