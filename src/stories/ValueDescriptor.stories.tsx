import { ComponentMeta, ComponentStory } from "@storybook/react";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default {
    title: 'Components/ValueDescriptor',
    component: ValueDescriptor,
} as ComponentMeta<typeof ValueDescriptor>;

const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
    description: 'ganhos no mês',
    value: 560322.02,
    color: "default",
};

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = {
    description: 'ganhos no mês',
    value: 560322.02,
    color: "default",
    isCurrency: true
};

export const Primary = Template.bind({});
Primary.args = {
    description: 'ganhos no mês',
    value: 560322.02,
    color: "primary",
}

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
    description: 'ganhos no mês',
    value: 560322.02,
    color: "primary",
    isCurrency: true    
}