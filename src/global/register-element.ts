import { App } from 'vue'
import 'element-plus/dist/index.css'

import { ElButton, ElAside } from 'element-plus'

const components = [ElButton, ElAside]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
