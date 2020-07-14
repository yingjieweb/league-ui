import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import LolCascader from "../../../src/components/Cascader/LolCascader"
import LolCascaderList from "../../../src/components/Cascader/LolCascaderList"

const testData = {
  source: [
    { name: '浙江', children: [ { name: '嘉兴', isLeaf: false, children: [ {name: '上城区'}, {name: '中城区'}, {name: '下城区'}, ] }, { name: '湖州', isLeaf: false, children: [ {name: '南湖'}, {name: '秀洲'}, {name: '北湖'}, ] }, ] },
    { name: '广东', children: [ {name: '广州', isLeaf: true}, { name: '佛山', isLeaf: false, children: [ {name: '南海区'}, {name: '顺德区'}, {name: '禅城区'}, ] }, ] }
  ],
  selected: [],
}

describe('LolCascaderList.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolCascaderList)
    expect(wrapper).to.exist
  })

  it('has LolCascaderList', () => {
    const wrapper = mount(LolCascader)
    expect(wrapper.findComponent(LolCascaderList)).to.exist
  })
})