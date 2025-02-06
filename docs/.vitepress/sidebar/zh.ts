import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'

// 中文侧边栏
export const zhSidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'MQTT 入门',
      collapsed: true,
      items: [
        { text: '什么是 EMQX？MQTT 消息中间件基础介绍', link: `/01_emqx-intro/01_${commonDirectoryName}/` },
        { text: 'EMQX 部署指南：如何快速安装和运行 EMQX', link: `/01_emqx-intro/02_${commonDirectoryName}/` },
        { text: 'EMQX Dashboard 使用指南', link: `/01_emqx-intro/03_${commonDirectoryName}/` },
        { text: 'MQTT 基础概念及其在 EMQX 中的应用', link: `/01_emqx-intro/04_${commonDirectoryName}/` },
        { text: 'EMQX 的核心架构解析', link: `/01_emqx-intro/05_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'EMQX 配置与优化',
      collapsed: true,
      items: [
        { text: 'EMQX 服务器配置详解：如何优化 MQTT 服务器性能', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 认证与权限管理：如何保证 MQTT 连接安全', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 规则引擎：如何实现消息流转和处理', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '如何配置 EMQX 以支持大规模 MQTT 设备连接', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 高可用架构：集群部署与负载均衡', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'EMQX 高级特性',
      collapsed: true,
      items: [
        { text: 'EMQX 消息存储与持久化方案解析', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '如何使用 WebHook 让 EMQX 与外部系统集成', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 与 Kafka 集成，实现大数据分析', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '如何使用 WebSocket 连接 EMQX', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 支持的 MQTT 5.0 特性解析', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'EMQX 的集成与实践',
      collapsed: true,
      items: [
        { text: '如何使用 Python/MQTT.js 连接 EMQX 并收发消息', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 与 Prometheus + Grafana 结合进行监控', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '如何使用 EMQX 进行 IoT 设备管理', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '如何将 EMQX 与数据库（MySQL/PostgreSQL/Redis）集成', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 在边缘计算中的应用', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'EMQX 在生产环境中的应用',
      collapsed: true,
      items: [
        { text: 'EMQX 在物联网行业的最佳实践', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '如何保障 EMQX 在生产环境的稳定性与高可用性', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 性能测试与优化策略', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 生产环境故障排查指南', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '企业如何基于 EMQX 构建大规模物联网平台', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'EMQX 安全与运维',
      collapsed: true,
      items: [
        { text: '如何使用 SSL/TLS 保护 MQTT 连接', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '如何防止 MQTT 服务器受到攻击（DDOS/滥用连接）', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 日志分析与故障排查技巧', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: 'EMQX 用户认证方式对比（JWT、LDAP、数据库）', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
        { text: '如何在 Kubernetes（K8s）中部署和管理 EMQX', link: `/02_meqx-leap/01_${commonDirectoryName}/` },
      ]
    },
  ],
}