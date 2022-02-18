import { ComponentMeta, ComponentStory } from "@storybook/react";
import Paragraph from "../components/Typography/Paragraph";

export default {
    title: 'Typograph/Paragraph',
    component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: "default",
    children: `
    Exorcizamus te, omnis immundus spiritus omnis satanica 
    potestas, omnis incursio infernalis adversarii, omnis 
    legio, omnis congregatio et secta diabolica. Ergo draco
    maledicte et omnis legio diabolica adjuramus te. Cessa 
    decipere humanas creaturas, eisque aeternae Perditionis 
    venenum propinare. Vade, Satana, inventor et magister 
    omnis fallaciae, hostis humanae salutis. Humiliare sub 
    potenti manu dei, contremisce et effuge, invocato a nobis 
    sancto et terribili nomine, quem inferi tremunt. Ab 
    insidiis diaboli, libera nos, Domine. Exorcizamus te, omnis 
    immundus spiritus omnis satanica potestas, omnis incursio 
    infernalis adversarii, omnis legio, omnis congregatio et 
    secta diabolica. Ergo draco maledicte et omnis legio diabolica 
    adjuramus te. Cessa decipere humanas creaturas, eisque aeternae 
    Perditionis venenum propinare. Ut Ecclesiam tuam secura 
    tibi facias libertate servire te rogamus, audi nos.`
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: `
    Exorcizamus te, omnis immundus spiritus omnis satanica 
    potestas, omnis incursio infernalis adversarii, omnis 
    legio, omnis congregatio et secta diabolica. Ergo draco
    maledicte et omnis legio diabolica adjuramus te. Cessa 
    decipere humanas creaturas, eisque aeternae Perditionis 
    venenum propinare. Vade, Satana, inventor et magister 
    omnis fallaciae, hostis humanae salutis. Humiliare sub 
    potenti manu dei, contremisce et effuge, invocato a nobis 
    sancto et terribili nomine, quem inferi tremunt. Ab 
    insidiis diaboli, libera nos, Domine. Exorcizamus te, omnis 
    immundus spiritus omnis satanica potestas, omnis incursio 
    infernalis adversarii, omnis legio, omnis congregatio et 
    secta diabolica. Ergo draco maledicte et omnis legio diabolica 
    adjuramus te. Cessa decipere humanas creaturas, eisque aeternae 
    Perditionis venenum propinare. Ut Ecclesiam tuam secura 
    tibi facias libertate servire te rogamus, audi nos.`
};
