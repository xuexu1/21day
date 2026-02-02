# 开发指导文档（当前版本）

本文档基于当前代码结构与实现，整理项目结构、代码现状、功能隐患与改进建议，
作为后续开发与重构的参考。

## 项目结构与现状

### 技术栈与构建
- Vite + React（`vite.config.ts`），Tailwind 插件启用，但样式多为内联/绝对定位。
- 依赖包含 MUI、Radix、sonner、lucide-react 等，实际使用范围不均衡。

### 目录结构要点
- `src/main.tsx`：入口渲染
- `src/app/App.tsx`：主页面与业务状态
- `src/app/utils/`：存储、记忆曲线、统计逻辑
- `src/app/components/`：UI 组件与功能页
- `src/app/data/wordLibrary.ts`：默认词库
- `src/imports/`：Figma 导出的 SVG 路径与静态组件

## 核心流程概览

### 数据模型与存储
- 本地存储 key 为 `memoryWords`，若无数据则写入默认词库。
- 通过 `WordData` 维护复习等级、下次复习日期、回顾次数。

### 主页面状态集中在 `App.tsx`
- 单词列表、今日列表、当前索引、弹窗开关、批量导入状态均集中管理。

### 记忆逻辑
- `markAsRemembered` 按复习等级推进并设置下一次复习日期。
- `markAsForgotten` 直接降回 `level=0` 且当天再次复习。

## 功能实现隐患与风险

### 1) 日期与时区风险（高优先级）
- 当前日期使用 `toISOString()` 生成 `YYYY-MM-DD`，在 UTC+ 时区可能导致日期回退。
- `shouldReviewToday()` 依赖字符串比较，时区偏移会破坏判断。

建议：
- 统一使用本地日期格式化（或统一业务日）。
- 避免 `toISOString()` 作为业务日期字符串来源。

### 2) 依赖声明不完整（中优先级）
- `react`/`react-dom` 仅在 `peerDependencies`，非 monorepo 环境可能缺失。

建议：
- 在 `dependencies` 明确声明 React 版本，或在 README 中强制说明。

### 3) ID 生成与排序风险（中优先级）
- 单条新增与批量导入的 id 格式不统一。
- 统计逻辑 `parseInt(word.id)` 可能在非纯数字 id 上失效。

建议：
- 统一 id 生成方式，或增加 `createdAtMs` 字段用于排序。

### 4) 批量导入规则存在边界误判（中优先级）
- 正则自动分割可能误判大小写、缩写与混合语言。

建议：
- 明确导入格式规范 + 预览/编辑能力。
- 增加解析规则的测试覆盖。

### 5) 状态与逻辑集中在 `App.tsx`（中优先级）
- 业务逻辑与 UI 高度耦合，难测与难复用。

建议：
- 抽成 `useMemoryWords()` 或 service 层统一封装。

### 6) LocalStorage 的稳定性与扩展性风险（低-中）
- JSON 结构无版本控制，升级可能造成兼容问题。

建议：
- 引入 `schemaVersion` 与迁移策略。

### 7) 可访问性与交互一致性（低优先级）
- 部分按钮缺少可访问性标签。

建议：
- 统一 `aria-label` 与键盘焦点规范。

## 推荐测试清单

- 不同时区下日期计算与复习触发是否一致。
- 批量导入：多格式输入与混合大小写的解析正确性。
- 删除与导入后 `todayWords` 与 `allWords` 的同步一致性。
- 旧数据升级与回退策略是否稳定。

