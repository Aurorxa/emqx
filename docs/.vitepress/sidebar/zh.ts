import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'

// 中文侧边栏
export const zhSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'MQTT 基础',
      collapsed: true,
      items: [
        { text: '计算机软件常识科普', link: `/01_emqx-basic/01_${commonDirectoryName}/` },
        { text: 'Windows 软件包管理', link: `/01_emqx-basic/02_${commonDirectoryName}/` },
        { text: 'Java 语言入门一', link: `/01_emqx-basic/03_${commonDirectoryName}/` },
        { text: 'Java 语言入门二', link: `/01_emqx-basic/04_${commonDirectoryName}/` },
        { text: 'Java 基础知识', link: `/01_emqx-basic/05_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'MQTT 中级',
      collapsed: true,
      items: [
        { text: '计算机软件常识科普', link: `/01_meqx-leap/01_${commonDirectoryName}/` },
      ]
    },
  ],
}