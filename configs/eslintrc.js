/* eslint-env node */
const jsRules = {
  // js 语法规则
  'block-spacing': [1, 'always'], // 大括号内部空格
  'brace-style': [1, '1tbs', { 'allowSingleLine': true }], // 函数的大括号使用风格
  'comma-dangle': [1, 'always-multiline'], // 数组和对象结尾逗号换行时出现
  'comma-spacing': [1, { 'before': false, 'after': true }], // 逗号前后的空格
  'func-call-spacing': [1, 'never'], // 函数调用括号前的空格
  'indent': [1, 2], // 换行缩进
  'jsx-quotes': [1, 'prefer-double'], // jsx 属性 双引号
  'key-spacing': [1, { 'beforeColon': false, 'afterColon': true }], // 对象key-value 冒号后面加空格
  'keyword-spacing': [1, { 'before': true, 'after': true }], // 对象key-value 冒号后面加空格
  'no-array-constructor': [1], // Array对象生成数组
  'no-multi-assign': [1], // 禁止连续的赋值符号
  'no-trailing-spaces': [1], // 禁用行尾空格
  'no-unneeded-ternary': [1, {  'defaultAssignment': false }],  // 禁止可以在有更简单的可替代的表达式时使用三元操作符
  'no-whitespace-before-property': [1],
  'object-curly-spacing': [1, 'always', { 'objectsInObjects': false, 'arraysInObjects': false  }], // 强制在大括号中使用一致的空格
  'one-var': [1, { 'initialized': 'never' }], // 强制函数中的变量要么一起声明要么分开声明
  'one-var-declaration-per-line': [1, 'initializations'], // 强制函数中的变量要么一起声明要么分开声明
  'operator-linebreak': [1, 'before'], // 强制函数中的变量要么一起声明要么分开声明
  'quotes': [2, 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }], // 引号用单引号
  'semi': [2, 'never'], // 结尾分号去掉
  'semi-spacing': [2, { 'before': false, 'after': true }], // 分号前后的空格
  'space-before-blocks': [2, 'always'], // 强制在块之前使用一致的空格
  'space-in-parens': [2, 'never'], // 强制在圆括号内使用一致的空格
  'space-infix-ops': [2], // 要求操作符周围有空格
  'space-unary-ops': [2, { 'words': true, 'nonwords': false }], // 强制在一元操作符前后使用一致的空格
  'spaced-comment': [1, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']}], // 强制在注释中 // 或 /* 使用一致的空格
  'switch-colon-spacing': [2, { 'after': true, 'before': false }], // 强制在 switch 的冒号左右有空格
  'template-tag-spacing': [2, 'never'], // 要求或禁止在模板标记和它们的字面量之间有空格
  'arrow-body-style': [1, 'as-needed'], // 要求箭头函数体使用大括号
  'arrow-parens': [1, 'always'], // 要求箭头函数的参数使用圆括号
  'arrow-spacing': [1, { 'before': true, 'after': true }], // 强制箭头函数的箭头前后使用一致的空格
  'generator-star-spacing': [1, { 'before': false, 'after': true, 'method': 'neither' } ], // 强制 generator 函数中 * 号周围使用一致的空格
  'no-confusing-arrow': [2, { 'allowParens': true }], // 禁止在可能与比较操作符相混淆的地方使用箭头函数
  'no-useless-computed-key': [2], // 禁止在对象中使用不必要的计算属性
  'no-useless-rename': [2], // 禁止在对象中使用不必要的计算属性
  'no-var': [2], // 要求使用 let 或 const 而不是 var
  'prefer-const': [2], // 要求使用 const 声明那些声明后不再被修改的变量
  'rest-spread-spacing': [2, 'never'], // 强制剩余和扩展运算符及其表达式之间有空格
  'template-curly-spacing': [2, 'never'], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
  'yield-star-spacing': [2, 'after'],  // 强制在 yield* 表达式中 * 周围使用空格
}

const vueRules = {
// vue特殊规则
  'vue/max-attributes-per-line': [2, {
    'singleline': {
      'max': 5,
    },
    'multiline': {
      'max': 1,
    },
  }],
  'vue/singleline-html-element-content-newline': ['off', {
    'ignoreWhenNoAttributes': true,
    'ignoreWhenEmpty': true,
    'ignores': ['pre', 'textarea', 'div'],
  }],
}

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/vue3-essential',
    'eslint:recommended',
    // 'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  'rules': {
    ...vueRules,
    ...jsRules,
  },
}