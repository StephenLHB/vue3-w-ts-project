import { App } from 'vue'
import { ElButton, ElInput } from 'element-plus'
import 'element-plus/dist/index.css'
const elements = [ElButton, ElInput]

export default function (app: App): void {
  for (const cpn of elements) {
    app.component(cpn.name, cpn)
  }
}
