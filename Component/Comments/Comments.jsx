import React, { useState } from 'react';
import '../Comments/Comments.css';
import Everycoment from '../Everycoment/Everycoment';
import amy from '../../src/assets/image-amyrobson.png';
import juliusomo from '../../src/assets/image-juliusomo.png';
import maxblagun from '../../src/assets/image-maxblagun.png';
import ramsesmiron from '../../src/assets/image-ramsesmiron.png';
import AddComent from '../AddComent/AddComent';

function Comments() {
    const [arrayofobjects, setArrayofobjects] = useState([
        {
            Counter: "Counter",
            Userpic: amy,
            username: "amyrobso",
            time: "1 month ago",
            commentcontent: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            uniqueId: 1,
            isNew: false,
        },
        {
            Counter: "Counter",
            Userpic: juliusomo,
            username: "juliusomo",
            time: "3 weeks ago",
            commentcontent: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            uniqueId: 2,
            isNew: false,
        },
        {
            Counter: "Counter",
            Userpic: maxblagun,
            username: "maxblagun",
            time: "2 weeks ago",
            commentcontent: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            uniqueId: 3,
            isNew: false,
        },
        {
            Counter: "Counter",
            Userpic: ramsesmiron,
            username: "ramsesmiron",
            time: "week ago",
            commentcontent: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            uniqueId: 4,
            isNew: false,
        },
        {
            Counter: "Counter",
            Userpic: amy,
            username: "amyrobso",
            time: "friday",
            commentcontent: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            uniqueId: 5,
            isNew: false,
        },
        {
            Counter: "Counter",
            Userpic: juliusomo,
            username: "juliusomo",
            time: "yesterday",
            commentcontent: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            uniqueId: 6,
            isNew: false,
        }
    ]);

    function addnewpost(postContent) {
        const newpostobject = {
            Counter: "Counter",
            Userpic: juliusomo,
            username: "juliusomo",
            time: "just now",
            commentcontent: postContent,
            uniqueId: arrayofobjects.length + 1,
            isNew: true,
        };
        const newArrayofobjects = [...arrayofobjects, newpostobject];
        setArrayofobjects(newArrayofobjects);
    }

    function handleDelete(id) {
        setArrayofobjects(arrayofobjects.filter(comment => comment.uniqueId !== id));
    }

    function handleEdit(id, newContent) {
        setArrayofobjects(arrayofobjects.map(comment =>
            comment.uniqueId === id ? { ...comment, commentcontent: newContent } : comment
        ));
    }

    return (
        <>
            {arrayofobjects.map((Comment) => (
                <Everycoment 
                    key={Comment.uniqueId}
                    Counter={Comment.Counter}
                    Userpic={Comment.Userpic}
                    username={Comment.username}
                    time={Comment.time}
                    commentcontent={Comment.commentcontent}
                    uniqueId={Comment.uniqueId}
                    isNew={Comment.isNew}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
            <AddComent addnewpost={addnewpost} />
        </>
    );
}

export default Comments;
