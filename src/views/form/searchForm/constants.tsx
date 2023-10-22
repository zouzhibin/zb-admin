export const baseSearchColumns = [
  {
    type: 'input',
    name: 'name1',
    label: '字段1',
    span: 8,
    value: '字段1',
    attrs: {
      placeholder: '请输入字段1',
      clearable: true,
    },
  },
  {
    type: 'select',
    name: 'name2',
    label: '字段2',
    value: '',
    placeholder: '字段2',
    span: 8,
    options: [
      { value: 'Option1', label: 'Option1' },
      { value: 'Option2', label: 'Option2' },
      { value: 'Option3', label: 'Option3' },
      { value: 'Option4', label: 'Option4' },
      { value: 'Option5', label: 'Option5' },
    ],
    attrs: {
      placeholder: '请选择',
      clearable: true,
    },
  },
  {
    type: 'date-picker',
    name: 'name3',
    label: '时间',
    span: 8,
    value: null,
    attrs: {
      placeholder: '请选择时间',
      clearable: true,
      type: 'date',
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    type: 'date-picker',
    name: 'name4',
    label: '时间秒',
    span: 8,
    value: null,
    attrs: {
      placeholder: '请选择时间',
      clearable: true,
      type: 'datetime',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    type: 'date-picker',
    name: 'name5',
    label: '时间范围',
    span: 8,
    value: '',
    attrs: {
      placeholder: '请选择时间范围',
      clearable: true,
      type: 'daterange',
      valueFormat: 'YYYY-MM-DD',
      'start-placeholder': '开始时间',
      'end-placeholder': '结束时间',
    },
  },
  {
    type: 'time-select',
    name: 'name6',
    label: '时间选择',
    span: 8,
    value: '',
    attrs: {
      placeholder: '请选择',
      clearable: true,
    },
  },
  {
    type: 'cascader',
    name: 'name7',
    label: '级联选择器',
    span: 8,
    value: '',
    attrs: {
      placeholder: '请选择',
      clearable: true,
      options: [
        {
          value: 'disciplines',
          label: 'Disciplines',
          children: [
            {
              value: 'consistency',
              label: 'Consistency',
            },
            {
              value: 'feedback',
              label: 'Feedback',
            },
            {
              value: 'efficiency',
              label: 'Efficiency',
            },
            {
              value: 'controllability',
              label: 'Controllability',
            },
          ],
        },
      ],
    },
  },
]
