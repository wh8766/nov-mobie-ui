// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    'globals': {
        'document': true
    },
    // add your custom rules here
    'rules': {
    "indent": [2, 4, { "SwitchCase": 1 }],
    "semi": [2, "never"],
    // don't require .vue extension when importing
    'import/extensions': ['off', 'always', {
        'js': 'never',
        'vue': 'never'
    }],
    "no-mixed-operators": [
        "error",
        {
            "groups": [
                ["+", "-", "*", "/", "%", "**"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": true
        }
    ],
    'comma-dangle': [2, 'never'],
    'no-unused-expressions': 0,
    'no-underscore-dangle': 0,
    "linebreak-style": 0,
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'arrow-body-style': 0,
    'quote-props': 0,
    'no-prototype-builtins': 0,
    'no-continue': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-unused-vars': 0,
    'global-require': 0,
    'func-names': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/no-unresolved': [0, {commonjs: true, amd: true}],
    'import/no-extraneous-dependencies': ['error', {
        'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
