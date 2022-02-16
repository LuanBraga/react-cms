import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/Input/Input";

export default {
    title: 'Example/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    placeholder: 'e.g.: José Letício',
};

export const WithLabelAndPlaceHolder = Template.bind({})
WithLabelAndPlaceHolder.args = {
    label: 'Name',
    placeholder: 'e.g.: José Letício',
};

export const WithLabelAndContent = Template.bind({})
WithLabelAndContent.args = {
    label: 'Name',
    placeholder: 'e.g.: José Letício',
    value: 'Zé Leticio Canis Lupus Familiaris'
}

export const WithContent = Template.bind({})
WithContent.args = {
    value: 'Zé Leticio Canis Lupus Familiaris'
}
