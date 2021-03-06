export const appModel = {
  name: {
    value: '',
    rules: {
      label: '姓名',
      type: 'za-input',
      vRules: 'required|username|usernameLength',
      placeholder: '请输入姓名',
      errorMsg: '请输入姓名'
    }
  },
  genderCode: {
    value: 'M',
    rules: {
      label: '性别',
      type: 'za-sex',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入性别'
    }
  },
  birthday: {
    value: '1980-01-01',
    rules: {
      label: '出生日期',
      type: 'za-date',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入出生日期',
      stime:'',
      etime:'',
    }
  },
  occupation: {
    value: '',
    rules: {
      label: '职业',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请选择投保人职业'
    }
  }
//occupationDesc: {
//  value: '',
//  rules: {
//    label: '职业',
//    vRules: 'required',
//    placeholder: '请选择',
//    errorMsg: '请选择投保人职业'
//  }
//}
}

export const firstInsModel = {
  relation: {
    value: '',
    rules: {
      label: '是投保人',
      type: 'za-select',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入是投保人',
      showName: true,
      options: [[
        {
          name: '本人',
          value: '00'
        }, {
          name: '父母',
          value: '01'
        },
        {
          name: '配偶',
          value: '02'
        },
        {
          name: '子女',
          value: '03'
        },
        {
          name: '祖孙',
          value: '04'
        },
        {
          name: '监护',
          value: '05'
        },
        {
          name: '其他',
          value: '06'
        },
        {
          name: '保单服务人员',
          value: '07'
        },
        {
          name: '直系亲属',
          value: '08'
        },
      ]]
    }
  },
  name: {
    value: '',
    rules: {
      label: '姓名',
      type: 'za-input',
      vRules: 'required|username|usernameLength',
      placeholder: '请输入姓名',
      errorMsg: '请输入姓名',
      readOnly:false
    }
  },
  genderCode: {
    value: 'M',
    rules: {
      label: '性别',
      type: 'za-sex',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入性别',
      readOnly:false
    }
  },
  birthday: {
    value: '1980-01-01',
    rules: {
      label: '出生日期',
      type: 'za-date',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入出生日期',
      readOnly:false,
      stime:'1940-01-01',
      etime:'',
    }
  },
  // type hidden 不渲染
  insureId: {
    value: '',
    rules: {
      type: 'hidden'
    }
  },
  occupation: {
    value: '',
    rules: {
      label: '职业',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请选择投保人职业'
    }
  }
}

export const otherInsModel = {
  relation: {
    value: '',
    rules: {
      label: '是投保人',
      type: 'za-select',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入是投保人',
      showName: true,
      options: [[
        {
          name: '父母',
          value: '01'
        },
        {
          name: '配偶',
          value: '02'
        },
        {
          name: '子女',
          value: '03'
        },
        {
          name: '祖孙',
          value: '04'
        },
        {
          name: '监护',
          value: '05'
        },
        {
          name: '其他',
          value: '06'
        },
        {
          name: '保单服务人员',
          value: '07'
        },
        {
          name: '直系亲属',
          value: '08'
        },
      ]]
    }
  },
  relationFristInsure: {
    value: '',
    rules: {
      label: '是被保人',
      type: 'za-select',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入是被保人',
      showName: true,
      options: [[
        {
          name: '父母',
          value: '01'
        },
        {
          name: '配偶',
          value: '02'
        },
        {
          name: '子女',
          value: '03'
        },
        {
          name: '祖孙',
          value: '04'
        },
        {
          name: '监护',
          value: '05'
        },
        {
          name: '其他',
          value: '06'
        },
        {
          name: '保单服务人员',
          value: '07'
        },
        {
          name: '直系亲属',
          value: '08'
        },
      ]]
    }
  },
  name: {
    value: '',
    rules: {
      label: '姓名',
      type: 'za-input',
      vRules: 'required|username|usernameLength',
      placeholder: '请输入姓名',
      errorMsg: '请输入姓名'
    }
  },
  genderCode: {
    value: 'M',
    rules: {
      label: '性别',
      type: 'za-sex',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入性别'
    }
  },
  birthday: {
    value: '',
    rules: {
      label: '出生日期',
      type: 'za-date',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请输入出生日期',
      stime:'1940-01-01',
      etime:'',
    }
  },
  // type hidden 不渲染
  insureId: {
    value: '',
    rules: {
      type: 'hidden'
    }
  },
  occupation: {
    value: '',
    rules: {
      label: '职业',
      vRules: 'required',
      placeholder: '请选择',
      errorMsg: '请选择投保人职业'
    }
  }
}
