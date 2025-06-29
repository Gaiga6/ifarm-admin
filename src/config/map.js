// 地图配置文件
export const mapConfig = {
  // 高德地图API密钥 - 请替换为您的实际密钥
  // 申请地址：https://console.amap.com/dev/key/app
  amapKey: 'YOUR_AMAP_API_KEY',
  
  // 地图默认配置
  defaultCenter: {
    longitude: 116.397428, // 北京天安门
    latitude: 39.90923
  },
  
  // 地图样式
  mapStyle: 'amap://styles/normal',
  
  // 默认缩放级别
  defaultZoom: 15,
  
  // 搜索半径（米）
  searchRadius: 1000,
  
  // 定位配置
  geolocationOptions: {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  }
}

// 地图API加载状态
export const mapApiStatus = {
  loading: false,
  loaded: false,
  error: null
}

// 动态加载高德地图API
export const loadAMapAPI = () => {
  return new Promise((resolve, reject) => {
    // 如果已经加载，直接返回
    if (window.AMap) {
      mapApiStatus.loaded = true
      resolve(window.AMap)
      return
    }
    
    // 如果正在加载，等待加载完成
    if (mapApiStatus.loading) {
      const checkLoaded = () => {
        if (window.AMap) {
          resolve(window.AMap)
        } else {
          setTimeout(checkLoaded, 100)
        }
      }
      checkLoaded()
      return
    }
    
    // 开始加载
    mapApiStatus.loading = true
    
    const script = document.createElement('script')
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${mapConfig.amapKey}&plugin=AMap.Geocoder,AMap.PlaceSearch,AMap.Geolocation`
    
    script.onload = () => {
      mapApiStatus.loading = false
      mapApiStatus.loaded = true
      mapApiStatus.error = null
      resolve(window.AMap)
    }
    
    script.onerror = (error) => {
      mapApiStatus.loading = false
      mapApiStatus.error = error
      reject(new Error('高德地图API加载失败，请检查网络连接和API密钥'))
    }
    
    document.head.appendChild(script)
  })
}

// 检查API密钥是否配置
export const checkApiKey = () => {
  if (!mapConfig.amapKey || mapConfig.amapKey === 'YOUR_AMAP_API_KEY') {
    console.warn('请在 src/config/map.js 中配置您的高德地图API密钥')
    return false
  }
  return true
}