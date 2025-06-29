<template>
  <div class="error-container">
    <div class="error-content">
      <!-- 错误图标 -->
      <div class="error-icon">
        <el-icon class="icon"><Lock /></el-icon>
      </div>
      
      <!-- 错误信息 -->
      <div class="error-info">
        <h1 class="error-code">403</h1>
        <h2 class="error-title">访问被拒绝</h2>
        <p class="error-description">
          抱歉，您没有权限访问此页面。请联系管理员获取相应权限。
        </p>
      </div>
      
      <!-- 操作按钮 -->
      <div class="error-actions">
        <el-button type="primary" @click="goBack">
          <el-icon><ArrowLeft /></el-icon>
          返回上页
        </el-button>
        <el-button @click="goHome">
          <el-icon><House /></el-icon>
          回到首页
        </el-button>
        <el-button type="info" @click="contactAdmin">
          <el-icon><Service /></el-icon>
          联系管理员
        </el-button>
      </div>
      
      <!-- 权限提示 -->
      <div class="permission-tips">
        <h3>可能的原因：</h3>
        <ul>
          <li>您的账户权限不足</li>
          <li>该功能需要特定角色权限</li>
          <li>您的会话已过期</li>
          <li>系统正在维护中</li>
        </ul>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="background-decoration">
      <div class="decoration-item item-1"></div>
      <div class="decoration-item item-2"></div>
      <div class="decoration-item item-3"></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Lock, ArrowLeft, House, Service } from '@element-plus/icons-vue'
const router = useRouter()

/**
 * 返回上一页
 */
const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    goHome()
  }
}

/**
 * 回到首页
 */
const goHome = () => {
  router.push('/dashboard')
}

/**
 * 联系管理员
 */
const contactAdmin = () => {
  ElMessage.info('请联系系统管理员：admin@ifarm.com 或拨打客服电话：400-123-4567')
}
</script>

<style scoped>
.error-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.error-content {
  position: relative;
  z-index: 2;
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 60px 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 600px;
  width: 90%;
}

/* 错误图标 */
.error-icon {
  margin-bottom: 30px;
}

.icon {
  font-size: 6rem;
  color: #f56c6c;
  background: rgba(245, 108, 108, 0.1);
  border-radius: 50%;
  padding: 30px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 错误信息 */
.error-info {
  margin-bottom: 40px;
}

.error-code {
  font-size: 4rem;
  font-weight: bold;
  color: #f56c6c;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px 0;
}

.error-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* 操作按钮 */
.error-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.error-actions .el-button {
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  transition: all 0.3s;
}

.error-actions .el-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* 权限提示 */
.permission-tips {
  text-align: left;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid #f56c6c;
}

.permission-tips h3 {
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 15px 0;
  font-weight: 600;
}

.permission-tips ul {
  margin: 0;
  padding-left: 20px;
  color: #666;
}

.permission-tips li {
  margin-bottom: 8px;
  line-height: 1.5;
}

/* 背景装饰 */
.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.decoration-item {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.item-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.item-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.item-3 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .error-content {
    padding: 40px 20px;
    width: 95%;
  }
  
  .error-code {
    font-size: 3rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
  
  .icon {
    font-size: 4rem;
    width: 100px;
    height: 100px;
    padding: 20px;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .error-actions .el-button {
    width: 100%;
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .error-content {
    padding: 30px 15px;
  }
  
  .error-code {
    font-size: 2.5rem;
  }
  
  .error-title {
    font-size: 1.3rem;
  }
  
  .icon {
    font-size: 3rem;
    width: 80px;
    height: 80px;
    padding: 15px;
  }
  
  .permission-tips {
    padding: 15px;
  }
  
  .permission-tips h3 {
    font-size: 1rem;
  }
}
</style>