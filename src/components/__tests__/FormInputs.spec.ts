import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PriceFormVue from '../PriceForm.vue'
import RadioButtonVue from '../FormElements/RadioButton.vue'
import CheckBoxVue from '../FormElements/CheckBox.vue'
import CustomSelect from '../FormElements/CustomSelect.vue'
import { StudySessionDropdown } from '@/constants'

describe('Pricing Calculator', () => {
	it('renders properly', () => {
		const wrapper = mount(PriceFormVue)
		expect(wrapper.text()).toContain('Pricing calculator')
	})
})

describe('RadioButton', () => {
	it('updates v-model when radio button is clicked', async () => {
		const wrapper = mount(RadioButtonVue, {
			props: {
				label: 'Test radio button',
				value: 'Plan 01',
				name: 'test-radio-button',
				modelValue: 'initialText',
				'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
			}
		})
		await wrapper.find('[data-test="custom-radio"]').setValue(true)
		expect(wrapper.props('modelValue')).toBe('Plan 01')
	})
})

describe('Checkbox', () => {
	it('updates v-model when custom checkbox is clicked', async () => {
		const wrapper = mount(CheckBoxVue, {
			props: {
				label: 'Test Checkbox',
				value: 'Country 01',
				modelValue: [],
				'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
			}
		})
		await wrapper.find('[data-test="custom-checkbox"]').setValue(true)
		expect(wrapper.props('modelValue')).toContain('Country 01')
	})
})

describe('Custom Select', () => {
	it('updates v-model for custom select', async () => {
		const wrapper = mount(CustomSelect, {
			props: {
				placeholder: 'Test Select',
				dropdown: StudySessionDropdown,
				modelValue: '',
				'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
			},
			data() {
				return {
					showDropdown: true
				}
			},
		})
		await wrapper.find('[data-test="dropdown-con"]').trigger('click')
		await wrapper.find(`[data-test="test-${StudySessionDropdown[0].id}"]`).trigger('click')
		expect(wrapper.props('modelValue')).toContain(StudySessionDropdown[0].value)
	})
})
