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
  ElTabs,
  ElCheckbox,
  ElLink
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
  ElTabPane,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
