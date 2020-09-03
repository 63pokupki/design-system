import Sidebar from "./Sidebar.vue";

export default {
    title: "Общие/Sidebar",
    component: Sidebar,
};

export const standart = () => ({
    components: { Sidebar },
    data() {
        return {
            open: false,
        };
    },
    methods: {
        onAsideChange() {
            this.open = !this.open;
        },
    },
    template: `
    <div>
        <button @click="onAsideChange">Открыть боковую секцию</button>
    <Sidebar :open="open" @close="onAsideChange">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores eius dolores nostrum. Minima, numquam incidunt! Nesciunt a quo labore, vitae hic maxime blanditiis eius temporibus quos adipisci laborum, ipsa accusantium harum animi quas maiores possimus fugiat perspiciatis at fuga unde! Quisquam repellendus libero commodi quis explicabo consequatur quia inventore, illo maxime assumenda tempore repellat cum perferendis, incidunt mollitia officia voluptas magni magnam eveniet saepe nesciunt distinctio nemo. Neque doloremque iste enim quia sint eligendi voluptates natus consectetur recusandae omnis. Labore earum eius autem aspernatur, officia optio corporis consequatur, vel laboriosam dolorem quos. Et ipsa perferendis vitae non, distinctio quo quasi! Id adipisci provident autem! Sint saepe magnam expedita facilis exercitationem obcaecati fugiat amet consequatur nostrum. Tempore possimus reprehenderit accusamus neque, ad ullam minus quos quia sapiente velit cumque, reiciendis vitae? Quidem maiores vel amet dolores. Tempore incidunt, eligendi nostrum nesciunt aliquam a aperiam omnis dolor praesentium consectetur maxime expedita porro excepturi vel, maiores natus! Sint aut quae assumenda quisquam sequi saepe ab explicabo! Non ad ut aspernatur soluta? Tempora ad dicta ab unde aperiam sint illo officiis dolor beatae atque nisi deserunt, fugiat molestias quos reprehenderit, voluptas quam debitis recusandae exercitationem eligendi rerum laboriosam nobis voluptatem ex? Doloribus vitae distinctio sapiente quaerat, molestiae inventore illum nisi hic et at aperiam optio perspiciatis libero quia nesciunt rerum, possimus rem dolor temporibus fugit, voluptatem voluptas amet. Dicta, nobis. Accusamus omnis reiciendis eius culpa veniam maxime cumque quia incidunt eos doloremque, labore asperiores? Dolorem velit eum quidem magni qui eos id minus harum deserunt quaerat enim, sed ut libero ipsa excepturi cumque quasi perspiciatis nam tenetur corrupti aspernatur officia voluptatum praesentium? Harum fugit adipisci enim officia totam ipsam aperiam atque cum a debitis quae magni maiores ullam, itaque sed doloremque! Velit rerum commodi consectetur provident tempore, maxime dicta veniam autem ad. Architecto cum quidem perspiciatis quia aliquid dicta inventore est et ipsam ea non delectus nulla, eaque deserunt velit. Nihil, omnis voluptatibus! Architecto illo velit laudantium quo, iure autem dolore dolorem quasi atque explicabo enim, libero deleniti nisi repellendus officia maxime sequi odit molestias non tenetur a ab harum eius? Id quae repellat possimus iusto odio. Voluptatibus excepturi nemo labore assumenda vitae debitis accusamus, soluta est iusto cumque veritatis doloremque possimus eius delectus, in maiores. Ex hic eaque, iusto qui odit blanditiis doloremque, inventore reiciendis magnam labore perspiciatis, corrupti recusandae! Cumque culpa tempora, deserunt non tempore cupiditate, doloremque rerum harum fugit sequi maiores necessitatibus sunt numquam id aliquid voluptatem aperiam, debitis consequuntur. Aspernatur nemo nesciunt fugiat incidunt tempora libero quaerat vero dolorum assumenda quas at, non, magni quia, facere fuga illum molestiae. Consectetur, inventore cupiditate! Accusamus ipsam recusandae, sint et sunt eligendi dolorum adipisci rem iusto laborum impedit, aliquam ut autem culpa harum possimus consequuntur enim ea porro! Quam in accusantium doloremque praesentium a architecto eveniet. Accusantium quod ex dolorem neque veritatis? Non at soluta voluptatibus alias labore mollitia nobis ipsum veniam quidem, ad tempore nam sequi? Rem quae quos harum doloribus eligendi! Iure excepturi iste incidunt aspernatur est esse fugiat placeat voluptatibus unde, quidem itaque error quisquam magnam impedit dicta asperiores maxime doloremque sed reiciendis, ea consequatur sapiente eum beatae. Obcaecati ex illum, omnis quod temporibus necessitatibus reiciendis amet, laborum provident quam tempora inventore quia eos aliquam voluptatibus distinctio aperiam et veritatis totam eius sequi. Facilis laboriosam mollitia sit nihil aperiam natus dolor, molestias eveniet dolore corporis autem error magni sunt dicta fugit? Corporis ipsam assumenda numquam eligendi, dignissimos excepturi quod eos libero dolores, fugiat adipisci repudiandae facilis ducimus quia? Minus ab omnis nam facilis quia beatae. In dicta officia animi, odio adipisci aperiam recusandae quam est vel veniam rem, alias fugiat, rerum cumque? Ab nemo doloribus pariatur magni aspernatur odit mollitia voluptas corrupti placeat. Odit aliquid quo, ab harum cum molestias ratione quis labore vero tenetur optio possimus aut. Qui, aperiam! Quia repudiandae autem voluptas unde, aspernatur, corrupti incidunt obcaecati enim eos vel iure qui amet quam tempora, nemo rem eaque adipisci assumenda dolorum maiores ad eveniet est quas illo. Cumque quis architecto eaque quia ipsa harum itaque, similique excepturi debitis minima iste eum nihil perspiciatis, molestiae distinctio mollitia. Natus incidunt suscipit magni molestiae, veritatis similique necessitatibus officiis provident cumque, maiores, labore enim repellat quasi soluta voluptatum. Earum laborum nobis est porro illo, assumenda in laudantium tempore inventore itaque? Nobis voluptatem molestias saepe quisquam atque sunt perspiciatis. Impedit nam ipsam amet aperiam fuga laborum at, omnis illum. Id, fugiat pariatur? Facilis voluptate aspernatur eveniet temporibus, ducimus reiciendis laborum architecto voluptates porro eos corporis molestias perferendis accusamus aliquam pariatur sed necessitatibus amet esse incidunt et error eius voluptatum ipsam. Officia, culpa itaque voluptatum rerum eos recusandae cupiditate dolores amet voluptas ea suscipit quod distinctio. Nesciunt, voluptatem iusto! Earum excepturi tempore accusantium voluptates, nemo rerum cum a aut dolorum, nihil aspernatur ullam itaque quidem iste repellat sequi voluptate illum eius quia. Esse non doloremque error mollitia repellat, aliquam alias neque odio commodi cumque molestias, nihil nisi. Aliquam recusandae ad nemo totam voluptatibus consequuntur provident distinctio vel, id aliquid temporibus sapiente, veritatis dolores facilis officia consequatur iusto facere deserunt perferendis in dicta numquam! Deleniti, at quia nesciunt qui iusto minus necessitatibus maiores unde molestiae deserunt autem ipsam officiis tempore dolorum adipisci debitis consequuntur consequatur, ea cumque corrupti. Illum animi iusto ipsa quibusdam quasi cupiditate autem, possimus error, nesciunt, deserunt quos iste reprehenderit. Quaerat, culpa eum saepe deserunt autem magni a eveniet velit nesciunt corporis quam odit consequuntur quidem! Soluta consectetur ut at, eius vel debitis blanditiis fuga dolores autem reiciendis sapiente suscipit in perspiciatis? Omnis odit et earum assumenda cupiditate repellat aut velit reprehenderit labore saepe neque, quaerat aliquam nemo, enim nisi doloribus, ducimus at quis eligendi? Non voluptatibus sit provident eaque vero, maxime modi doloremque consectetur aliquam quidem illo tempora ea quasi natus fugiat doloribus veniam tempore placeat inventore aspernatur ut aliquid perspiciatis quam repellat. Libero reprehenderit velit ut tempora commodi tenetur rem, eaque deleniti nostrum enim perspiciatis ipsam repellat error nemo, doloremque sequi itaque unde. Optio iste cupiditate ad explicabo, ab rem reprehenderit aliquid. Quae, inventore blanditiis cumque libero exercitationem cupiditate.
    </Sidebar>
    </div>
    `,
});

export const maxWidth = () => ({
    components: { Sidebar },
    data() {
        return {
            open: false,
        };
    },
    methods: {
        onAsideChange() {
            this.open = !this.open;
        },
    },
    template: `
    <div>
        <button @click="onAsideChange">Открыть боковую секцию</button>
    <Sidebar :open="open" maxWidth="300px" @close="onAsideChange">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus maiores eius dolores nostrum. Minima, numquam incidunt! Nesciunt a quo labore, vitae hic maxime blanditiis eius temporibus quos adipisci laborum, ipsa accusantium harum animi quas maiores possimus fugiat perspiciatis at fuga unde! Quisquam repellendus libero commodi quis explicabo consequatur quia inventore, illo maxime assumenda tempore repellat cum perferendis, incidunt mollitia officia voluptas magni magnam eveniet saepe nesciunt distinctio nemo. Neque doloremque iste enim quia sint eligendi voluptates natus consectetur recusandae omnis. Labore earum eius autem aspernatur, officia optio corporis consequatur, vel laboriosam dolorem quos. Et ipsa perferendis vitae non, distinctio quo quasi! Id adipisci provident autem! Sint saepe magnam expedita facilis exercitationem obcaecati fugiat amet consequatur nostrum. Tempore possimus reprehenderit accusamus neque, ad ullam minus quos quia sapiente velit cumque, reiciendis vitae? Quidem maiores vel amet dolores. Tempore incidunt, eligendi nostrum nesciunt aliquam a aperiam omnis dolor praesentium consectetur maxime expedita porro excepturi vel, maiores natus! Sint aut quae assumenda quisquam sequi saepe ab explicabo! Non ad ut aspernatur soluta? Tempora ad dicta ab unde aperiam sint illo officiis dolor beatae atque nisi deserunt, fugiat molestias quos reprehenderit, voluptas quam debitis recusandae exercitationem eligendi rerum laboriosam nobis voluptatem ex? Doloribus vitae distinctio sapiente quaerat, molestiae inventore illum nisi hic et at aperiam optio perspiciatis libero quia nesciunt rerum, possimus rem dolor temporibus fugit, voluptatem voluptas amet. Dicta, nobis. Accusamus omnis reiciendis eius culpa veniam maxime cumque quia incidunt eos doloremque, labore asperiores? Dolorem velit eum quidem magni qui eos id minus harum deserunt quaerat enim, sed ut libero ipsa excepturi cumque quasi perspiciatis nam tenetur corrupti aspernatur officia voluptatum praesentium? Harum fugit adipisci enim officia totam ipsam aperiam atque cum a debitis quae magni maiores ullam, itaque sed doloremque! Velit rerum commodi consectetur provident tempore, maxime dicta veniam autem ad. Architecto cum quidem perspiciatis quia aliquid dicta inventore est et ipsam ea non delectus nulla, eaque deserunt velit. Nihil, omnis voluptatibus! Architecto illo velit laudantium quo, iure autem dolore dolorem quasi atque explicabo enim, libero deleniti nisi repellendus officia maxime sequi odit molestias non tenetur a ab harum eius? Id quae repellat possimus iusto odio. Voluptatibus excepturi nemo labore assumenda vitae debitis accusamus, soluta est iusto cumque veritatis doloremque possimus eius delectus, in maiores. Ex hic eaque, iusto qui odit blanditiis doloremque, inventore reiciendis magnam labore perspiciatis, corrupti recusandae! Cumque culpa tempora, deserunt non tempore cupiditate, doloremque rerum harum fugit sequi maiores necessitatibus sunt numquam id aliquid voluptatem aperiam, debitis consequuntur. Aspernatur nemo nesciunt fugiat incidunt tempora libero quaerat vero dolorum assumenda quas at, non, magni quia, facere fuga illum molestiae. Consectetur, inventore cupiditate! Accusamus ipsam recusandae, sint et sunt eligendi dolorum adipisci rem iusto laborum impedit, aliquam ut autem culpa harum possimus consequuntur enim ea porro! Quam in accusantium doloremque praesentium a architecto eveniet. Accusantium quod ex dolorem neque veritatis? Non at soluta voluptatibus alias labore mollitia nobis ipsum veniam quidem, ad tempore nam sequi? Rem quae quos harum doloribus eligendi! Iure excepturi iste incidunt aspernatur est esse fugiat placeat voluptatibus unde, quidem itaque error quisquam magnam impedit dicta asperiores maxime doloremque sed reiciendis, ea consequatur sapiente eum beatae. Obcaecati ex illum, omnis quod temporibus necessitatibus reiciendis amet, laborum provident quam tempora inventore quia eos aliquam voluptatibus distinctio aperiam et veritatis totam eius sequi. Facilis laboriosam mollitia sit nihil aperiam natus dolor, molestias eveniet dolore corporis autem error magni sunt dicta fugit? Corporis ipsam assumenda numquam eligendi, dignissimos excepturi quod eos libero dolores, fugiat adipisci repudiandae facilis ducimus quia? Minus ab omnis nam facilis quia beatae. In dicta officia animi, odio adipisci aperiam recusandae quam est vel veniam rem, alias fugiat, rerum cumque? Ab nemo doloribus pariatur magni aspernatur odit mollitia voluptas corrupti placeat. Odit aliquid quo, ab harum cum molestias ratione quis labore vero tenetur optio possimus aut. Qui, aperiam! Quia repudiandae autem voluptas unde, aspernatur, corrupti incidunt obcaecati enim eos vel iure qui amet quam tempora, nemo rem eaque adipisci assumenda dolorum maiores ad eveniet est quas illo. Cumque quis architecto eaque quia ipsa harum itaque, similique excepturi debitis minima iste eum nihil perspiciatis, molestiae distinctio mollitia. Natus incidunt suscipit magni molestiae, veritatis similique necessitatibus officiis provident cumque, maiores, labore enim repellat quasi soluta voluptatum. Earum laborum nobis est porro illo, assumenda in laudantium tempore inventore itaque? Nobis voluptatem molestias saepe quisquam atque sunt perspiciatis. Impedit nam ipsam amet aperiam fuga laborum at, omnis illum. Id, fugiat pariatur? Facilis voluptate aspernatur eveniet temporibus, ducimus reiciendis laborum architecto voluptates porro eos corporis molestias perferendis accusamus aliquam pariatur sed necessitatibus amet esse incidunt et error eius voluptatum ipsam. Officia, culpa itaque voluptatum rerum eos recusandae cupiditate dolores amet voluptas ea suscipit quod distinctio. Nesciunt, voluptatem iusto! Earum excepturi tempore accusantium voluptates, nemo rerum cum a aut dolorum, nihil aspernatur ullam itaque quidem iste repellat sequi voluptate illum eius quia. Esse non doloremque error mollitia repellat, aliquam alias neque odio commodi cumque molestias, nihil nisi. Aliquam recusandae ad nemo totam voluptatibus consequuntur provident distinctio vel, id aliquid temporibus sapiente, veritatis dolores facilis officia consequatur iusto facere deserunt perferendis in dicta numquam! Deleniti, at quia nesciunt qui iusto minus necessitatibus maiores unde molestiae deserunt autem ipsam officiis tempore dolorum adipisci debitis consequuntur consequatur, ea cumque corrupti. Illum animi iusto ipsa quibusdam quasi cupiditate autem, possimus error, nesciunt, deserunt quos iste reprehenderit. Quaerat, culpa eum saepe deserunt autem magni a eveniet velit nesciunt corporis quam odit consequuntur quidem! Soluta consectetur ut at, eius vel debitis blanditiis fuga dolores autem reiciendis sapiente suscipit in perspiciatis? Omnis odit et earum assumenda cupiditate repellat aut velit reprehenderit labore saepe neque, quaerat aliquam nemo, enim nisi doloribus, ducimus at quis eligendi? Non voluptatibus sit provident eaque vero, maxime modi doloremque consectetur aliquam quidem illo tempora ea quasi natus fugiat doloribus veniam tempore placeat inventore aspernatur ut aliquid perspiciatis quam repellat. Libero reprehenderit velit ut tempora commodi tenetur rem, eaque deleniti nostrum enim perspiciatis ipsam repellat error nemo, doloremque sequi itaque unde. Optio iste cupiditate ad explicabo, ab rem reprehenderit aliquid. Quae, inventore blanditiis cumque libero exercitationem cupiditate.
    </Sidebar>
    </div>
    `,
});
