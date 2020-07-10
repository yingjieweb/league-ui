import {expect} from 'chai'
import sinon from "sinon"
import {mount} from "@vue/test-utils"
import LolInput from "../../../src/components/Input/LolInput"

const testData = {
  values: ['text'],
  iconNames: ['setting'],
  disabled: true,
  readonly: true,
  placeholders: 'Some hint here',
  hint: 'Some error message here',
  hintTypes: ['success', 'info', 'danger', 'warning'],
  types: ['text', 'password', 'email', 'number'],
  events: ['change', 'focus', 'blur']
}

describe('LolInput.vue', () => {
  it('should exist', () => {
    const wrapper = mount(LolInput)
    expect(wrapper).to.exist
  })

  describe('props', () => {
    it('renders props.value when passed', () => {
      const {values} = testData
      values.forEach((value) => {
        const wrapper = mount(LolInput, {
          propsData: {
            value: value
          }
        })
        const inputElement = wrapper.find('input')
        expect(inputElement.attributes('type')).to.equal(value)
      })
    })

    it('renders props.disabled when passed', () => {
      const {disabled} = testData
      const wrapper = mount(LolInput, {
        propsData: {
          disabled: disabled
        }
      })
      const inputElement = wrapper.find('input')
      expect(inputElement.attributes('disabled')).to.equal('disabled')
    })

    it('renders props.readonly when passed', () => {
      const {readonly} = testData
      const wrapper = mount(LolInput, {
        propsData: {
          readonly: readonly
        }
      })
      const inputElement = wrapper.find('input')
      expect(inputElement.attributes('readonly')).to.equal('readonly')
    })

    it('renders props.placeholder when passed', () => {
      const {placeholder} = testData
      const wrapper = mount(LolInput, {
        propsData: {
          placeholder: placeholder
        }
      })
      const inputElement = wrapper.find('input')
      expect(inputElement.attributes('readonly')).to.equal(placeholder)
    })

    it('renders props.hint when passed', () => {
      const {hint} = testData
      const wrapper = mount(LolInput, {
        propsData: {
          hint: hint
        }
      })
      const inputElement = wrapper.find('small')
      expect(inputElement.text()).to.equal(hint)
    })

    it('renders props.hintType when passed', () => {
      const {hintTypes} = testData
      hintTypes.forEach((hintType) => {
        const wrapper = mount(LolInput, {
          propsData: {
            hintType: hintType
          }
        })
        expect(wrapper.classes().includes(`lol-input-wrapper-${hintType}`)).to.equal(true)
      })
    })
  })

  describe('event', () => {
    it('can be handled', () => {
      const {events} = testData
      const eventHandler = sinon.stub()

      events.forEach((event) => {
        const wrapper = mount(LolInput, {
          listeners: {
            [`${event}`]: eventHandler
          }
        })
        wrapper.find('input').trigger(event)
        expect(eventHandler.called).to.equal(true)
      })
    })
  })
})