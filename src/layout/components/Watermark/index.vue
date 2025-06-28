<template>
  <div class="watermark-container" ref="watermarkRef"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()
const watermarkRef = ref()
let watermarkDiv = null

// 创建水印
const createWatermark = () => {
  if (!watermarkRef.value) return
  
  // 清除旧水印
  if (watermarkDiv) {
    watermarkDiv.remove()
    watermarkDiv = null
  }
  
  if (!appStore.watermark.enabled) return
  
  // 创建水印元素
  watermarkDiv = document.createElement('div')
  watermarkDiv.className = 'watermark-overlay'
  
  // 设置水印样式
  const style = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: '9999',
    opacity: appStore.watermark.opacity.toString(),
    background: `url("${generateWatermarkImage()}") repeat`
  }
  
  Object.assign(watermarkDiv.style, style)
  
  // 添加到页面
  document.body.appendChild(watermarkDiv)
}

// 生成水印图片
const generateWatermarkImage = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  // 设置画布大小
  canvas.width = 200
  canvas.height = 100
  
  // 设置文字样式
  ctx.font = '14px Arial'
  ctx.fillStyle = '#000000'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  // 旋转文字
  ctx.save()
  ctx.translate(100, 50)
  ctx.rotate(-Math.PI / 6) // 倾斜30度
  ctx.fillText(appStore.watermark.text, 0, 0)
  ctx.restore()
  
  return canvas.toDataURL('image/png')
}

// 监听水印配置变化
watch(
  () => appStore.watermark,
  () => {
    createWatermark()
  },
  { deep: true }
)

onMounted(() => {
  createWatermark()
})

onUnmounted(() => {
  if (watermarkDiv) {
    watermarkDiv.remove()
    watermarkDiv = null
  }
})
</script>

<style scoped>
.watermark-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: -1;
}
</style> 