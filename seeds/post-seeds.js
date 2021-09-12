const { Post } = require('../models');

const postData = [
    {
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus id diam tempor pharetra et nec velit. Vestibulum tempus, turpis quis gravida mattis, quam lectus mollis orci, et pretium nisi lorem sed risus. Suspendisse vitae quam euismod, volutpat nulla vel, mattis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ut risus odio. Suspendisse non ligula in dolor molestie consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ornare purus vitae massa lacinia posuere. Suspendisse elementum, neque id ornare tempus, nunc neque maximus elit, et rutrum lacus nunc vitae tellus. Vestibulum sagittis lectus vitae ex porta, eget tristique libero vestibulum. Nunc auctor ex ut dictum dictum.",
        user_id: 1
    },
    {
        title: "Tofu kinfolk craft beer, bushwick occupy",
        post_content: "Tofu kinfolk craft beer, bushwick occupy retro four dollar toast keffiyeh fanny pack prism authentic schlitz jean shorts. Sriracha edison bulb bicycle rights ennui, hexagon distillery schlitz. Poutine mustache banh mi letterpress tattooed, typewriter vape. Trust fund distillery health goth banjo. Cronut brunch mlkshk farm-to-table drinking vinegar put a bird on it cardigan photo booth art party raw denim copper mug pork belly tilde.",
        user_id: 1
    },
    {
        title: "Taxidermy vexillologist pickled",
        post_content: "Taxidermy vexillologist pickled, single-origin coffee activated charcoal butcher tilde 3 wolf moon. Humblebrag irony taiyaki XOXO, dreamcatcher cold-pressed freegan austin brunch occupy swag adaptogen.",
        user_id: 2

    },
    {
        title: "What is Lorem Ipsum?",
        post_content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        user_id: 2
    },
    {
        title: "Where does it come from?",
        post_content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;