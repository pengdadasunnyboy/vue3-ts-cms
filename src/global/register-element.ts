import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElButton,
  ElAside,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElButton,
  ElAside,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElTabs,
  ElTabPane
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
