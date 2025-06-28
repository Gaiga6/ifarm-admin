// Element Plus 图标导入和管理
import {
  // 基础图标
  Document,
  Folder,
  Operation,
  Setting,
  User,
  UserFilled,
  
  // 导航图标
  Menu,
  ArrowDown,
  ArrowRight,
  Back,
  Right,
  Top,
  Bottom,
  HomeFilled,
  House,
  
  // 操作图标
  Edit,
  Delete,
  Plus,
  Minus,
  Search,
  Refresh,
  Download,
  Upload,
  Close,
  Check,
  
  // 状态图标
  SuccessFilled,
  WarningFilled,
  InfoFilled,
  QuestionFilled,
  CircleCheck,
  CircleClose,
  CircleCheckFilled,
  CircleCloseFilled,
  
  // 主题图标
  Sunny,
  Moon,
  
  // 功能图标
  Bell,
  Message,
  Location,
  Phone,
  Postcard,
  Calendar,
  Clock,
  Timer,
  
  // 工具图标
  Tools,
  Printer,
  Share,
  Star,
  StarFilled,
  
  // 媒体图标
  Picture,
  VideoPlay,
  Microphone,
  
  // 系统图标
  Odometer,
  Monitor,
  Files,
  FolderOpened,
  
  // 箭头图标
  Expand,
  Fold,
  
  // 更多图标
  Apple,
  Avatar,
  Key,
  Lock,
  Unlock,
  View,
  Hide,
  SwitchButton,
  RefreshLeft,
  Grid,
  List,
  
  // 新增图标
  Present,
  ShoppingBag,
  ShoppingCart
} from '@element-plus/icons-vue'

// 图标映射对象
const iconMap = {
  // 基础图标
  Document,
  Folder,
  Operation,
  Setting,
  User,
  UserFilled,
  
  // 导航图标
  Menu,
  ArrowDown,
  ArrowRight,
  Back,
  Right,
  Top,
  Bottom,
  HomeFilled,
  House,
  Home: HomeFilled, // 别名
  
  // 操作图标  
  Edit,
  Delete,
  Plus,
  Minus,
  Search,
  Refresh,
  Download,
  Upload,
  Close,
  Check,
  
  // 状态图标
  Success: SuccessFilled, // 使用SuccessFilled作为Success的别名
  SuccessFilled,
  Warning: WarningFilled, // 使用WarningFilled作为Warning的别名
  WarningFilled,
  Info: InfoFilled, // 使用InfoFilled作为Info的别名
  InfoFilled,
  Question: QuestionFilled, // 使用QuestionFilled作为Question的别名
  QuestionFilled,
  CircleCheck,
  CircleClose,
  CircleCheckFilled,
  CircleCloseFilled,
  
  // 主题图标
  Sunny,
  Moon,
  
  // 功能图标
  Bell,
  Message,
  Location,
  Phone,
  Postcard,
  Calendar,
  Clock,
  Timer,
  
  // 工具图标
  Tools,
  Printer,
  Share,
  Star,
  StarFilled,
  
  // 媒体图标
  Picture,
  VideoPlay,
  Microphone,
  
  // 系统图标
  Odometer,
  Monitor,
  Files,
  FolderOpened,
  
  // 箭头图标
  Expand,
  Fold,
  
  // 更多图标
  Apple,
  Avatar,
  Key,
  Lock,
  Unlock,
  View,
  Hide,
  SwitchButton,
  RefreshLeft,
  Grid,
  List,
  
  // 新增图标
  Present,
  ShoppingBag,
  ShoppingCart
}

// 获取图标组件的函数
export const getIcon = (iconName) => {
  return iconMap[iconName] || Document // 默认返回Document图标
}

// 导出所有图标（供其他组件直接导入使用）
export {
  Document,
  Folder,
  Operation,
  Setting,
  User,
  UserFilled,
  Menu,
  ArrowDown,
  ArrowRight,
  Back,
  Right,
  Top,
  Bottom,
  HomeFilled,
  House,
  Edit,
  Delete,
  Plus,
  Minus,
  Search,
  Refresh,
  Download,
  Upload,
  Close,
  Check,
  SuccessFilled,
  WarningFilled,
  InfoFilled,
  QuestionFilled,
  CircleCheck,
  CircleClose,
  CircleCheckFilled,
  CircleCloseFilled,
  Sunny,
  Moon,
  Bell,
  Message,
  Location,
  Phone,
  Postcard,
  Calendar,
  Clock,
  Timer,
  Tools,
  Printer,
  Share,
  Star,
  StarFilled,
  Picture,
  VideoPlay,
  Microphone,
  Odometer,
  Monitor,
  Files,
  FolderOpened,
  Expand,
  Fold,
  Apple,
  Avatar,
  Key,
  Lock,
  Unlock,
  View,
  Hide,
  SwitchButton,
  RefreshLeft,
  Grid,
  List,
  Present,
  ShoppingBag,
  ShoppingCart
} 