// cz.config.js  kk
/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
    ignores: [commit => commit.includes("init")],
    extends: ["@commitlint/config-conventional"],
    // alias: { fd: 'docs: fix typos' },
    // messages: {
    //     type: 'Select the type of change that you\'re committing:',
    //     scope: 'Denote the SCOPE of this change (optional):',
    //     customScope: 'Denote the SCOPE of this change:',
    //     subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    //     body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    //     breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
    //     footerPrefixsSelect: 'Select the ISSUES type of changeList by this change (optional):',
    //     customFooterPrefixs: 'Input ISSUES prefix:',
    //     footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
    //     confirmCommit: 'Are you sure you want to proceed with the commit above?'
    // },
    prompt: {
        // 中英文对照版
        messages: {
            type: '选择你要提交的类型 :',
            scope: '选择一个提交范围 (可选):',
            customScope: '请输入自定义的提交范围 :',
            subject: '填写简短精炼的变更描述 :\n',
            body: '填写更加详细的变更描述 (可选)。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更 (可选)。使用 "|" 换行 :\n',
            footerPrefixsSelect: '选择关联issue前缀 (可选):',
            customFooterPrefixs: '输入自定义issue前缀 :',
            footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
            confirmCommit: '是否提交或修改commit ?',
        },

        // types: [
        //     { value: 'feat', name: 'feat:     A new feature', emoji: ':sparkles:' },
        //     { value: 'fix', name: 'fix:      A bug fix', emoji: ':bug:' },
        //     { value: 'docs', name: 'docs:     Documentation only changes', emoji: ':memo:' },
        //     { value: 'style', name: 'style:    Changes that do not affect the meaning of the code', emoji: ':lipstick:' },
        //     { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature', emoji: ':recycle:' },
        //     { value: 'perf', name: 'perf:     A code change that improves performance', emoji: ':zap:' },
        //     { value: 'test', name: 'test:     Adding missing tests or correcting existing tests', emoji: ':white_check_mark:' },
        //     { value: 'build', name: 'build:    Changes that affect the build system or external dependencies', emoji: ':package:' },
        //     { value: 'ci', name: 'ci:       Changes to our CI configuration files and scripts', emoji: ':ferris_wheel:' },
        //     { value: 'chore', name: 'chore:    Other changes that don\'t modify src or test files', emoji: ':hammer:' },
        //     { value: 'revert', name: 'revert:   Reverts a previous commit', emoji: ':rewind:' }
        // ],



        types: [
            { value: 'feat', name: 'feat:     新增功能' },
            { value: 'fix', name: 'fix:      修复缺陷' },
            { value: 'docs', name: 'docs:     文档变更' },
            { value: 'style', name: 'style:    代码格式' },
            { value: 'refactor', name: 'refactor: 代码重构' },
            { value: 'perf', name: 'perf:     性能优化' },
            { value: 'test', name: 'test:     添加疏漏测试或已有测试改动' },
            { value: 'build', name: 'build:    构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)' },
            { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
            { value: 'revert', name: 'revert:   回滚 commit' },
            { value: 'chore', name: 'chore:    对构建过程或辅助工具和库的更改 (不影响源文件、测试用例)' },
            { value: 'wip', name: 'wip:      正在开发中' },
            { value: 'workflow', name: 'workflow: 工作流程改进' },
            { value: 'types', name: 'types:    类型定义文件修改' },
        ],
        // emptyScopesAlias: 'empty:      不填写',
        // customScopesAlias: 'custom:     自定义',

        useEmoji: false,
        emojiAlign: 'center',
        themeColorCode: '',
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: 'bottom',
        customScopesAlias: 'custom',
        emptyScopesAlias: 'empty',
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: '|',
        skipQuestions: [],
        issuePrefixs: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
        customIssuePrefixsAlign: 'top',
        emptyIssuePrefixsAlias: 'skip',
        customIssuePrefixsAlias: 'custom',
        allowCustomIssuePrefixs: true,
        allowEmptyIssuePrefixs: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: '',
        defaultIssues: '',
        defaultScope: '',
        defaultSubject: ''
    }

}
