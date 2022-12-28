const a = [
    {
        author: {},
        text: 'a',
    },
    {
        author: {},
        text: 'aaaa',
    },
    {
        author: {},
        text: 'aaaa',
    }
]
const authorSchema = new schema.Entity('author')
const textSchema = new schema.Entity('text');

const userSchema = new schema.Entity('user', { author: authorSchema, text: textSchema })

const chatSchema = new schema.Entity('chats', { chats: [userSchema] });

const postSchema = new schema.Entity('posts', {
    author: authorSchema,
    comments: [commentSchema]
});
