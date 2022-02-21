import { App } from 'vue'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElTabPane,
  ElTabs
} from 'element-plus'
import 'element-plus/dist/index.css'
const elements = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElForm,
  ElFormItem
]

export default function (app: App): void {
  for (const cpn of elements) {
    app.component(cpn.name, cpn)
  }
}
