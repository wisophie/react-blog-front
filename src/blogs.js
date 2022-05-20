import person from './img/person.jpg';
import bitcoin from './img/coin.jpg';
import bitcoin2 from './img/coin2.jpg';
import ai from './img/ai.jpg';
import fm from './img/fm.jpg';
import reactrouter from './img/reactrouter.jpg';
import res from './img/res.png';
const blog3 = [
    {
        id: 1,
        name: 'Wisfire',
        image: res,
        title: 'How to create a responsive website?',
        code: 'responsive-web',
        category: 'responsive'
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: reactrouter,
        title: 'React-router-dom v6新特性的使用',
        code: 'react-router',
        category: 'React-router'
    },
    {
        id: 3,
        name: 'John Doe',
        image: bitcoin2,
        title: '像AI一样思考',
        code: 'tesla-testing',
        category: 'AI'
    }

]
const blogs = [
    {
        id: 1,
        name: 'Lorem Ipsum',
        image: person,
        title: '特斯拉是最接近颠覆一切的公司',
        code: 'tesla-testing',
        category: 'Tesla'
    },
    {
        id: 2,
        name: 'Jane Doe',
        image: bitcoin,
        title: '人工智能是威胁还是机遇？',
        code: 'tesla-testing',
        category: '人工智能'
    },
    {
        id: 3,
        name: 'John Doe',
        image: fm,
        title: '用元宇宙解释费米悖论',
        code: 'feimi',
        category: '元宇宙'
    },
    {
        id: 4,
        name: 'Sarah Doe',
        image: ai,
        title: '人类的终极科技目标到底是什么?',
        code: 'tesla-testing',
        category: 'Tech'
    }
]

export { blogs, blog3 };