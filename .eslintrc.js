module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
  },
  rules: {
    'no-console': 'off', // 禁止调用console对象的方法。
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': ['off'], // 关闭空函数警告
    '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/no-v-html': 'off', // 禁止使用 v-html
    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-self-assign': 'off',
    'no-sparse-arrays': 'off',
    'vue/valid-v-for': 'off',
    'vue/no-unused-vars': 'off',
    'vue/require-v-for-key': 'off',
    'no-useless-escape': 'off',
    'vue/require-explicit-emits': 'off',
    'no-case-declarations': 'off', // 不允许在 case 子句中使用词法声明
    //禁止非空断言非空断言是在变量后面添加一个感叹号（!），表示该变量一定存在，不会为 null 或 undefined
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/require-prop-types': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-async-promise-executor': 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-default-prop': 'off', // 此规则要求为每个 prop 为必填时，必须提供默认值
    '@typescript-eslint/no-unused-vars': [
      // // 禁止定义未使用的变量
      'off',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
}
