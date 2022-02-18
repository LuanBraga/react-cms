import { ComponentMeta, ComponentStory } from "@storybook/react";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";

export default {
    title: 'Components/FieldDescriptor',
    component: FieldDescriptor,
} as ComponentMeta<typeof FieldDescriptor>;

const Template: ComponentStory<typeof FieldDescriptor> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
    field: 'data de nascimento',
    value: '26 de Dezembro de 1997 (25 anos)',
};