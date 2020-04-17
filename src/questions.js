const quizQuestions = [
    {
        question: "When it comes to work, success is...",
        answers: [
            {
                type: "Paul",
                content: "Important if I love what I'm doing. If not, I could care less"
            },
            {
                type: "George",
                content: "Everything, regardless of what I'm doing. I play to win"
            },
            {
                type: "Ringo",
                content: "Somewhat important. I know when I've succeeded, but I also know when I've failed"
            },
            {
                type: "John",
                content: "Not important. I just want a check, man"
            }
        ]
    },
    {
        question: "How do you view your coworkers and boss?",
        answers: [
            {
                type: "Paul",
                content: "They are all just people I work with. I like some more than others, but eh. What are you gonna do?"
            },
            {
                type: "George",
                content: "I'm not crazy about bossy bosses or too many coworkers"
            },
            {
                type: "Ringo",
                content: "Bosses I must please; coworkers must please me"
            },            
            {
                type: "John",
                content: "Bosses are only trying to bring me down, and coworkers either understand me or are complete and total idiots"
            }
        ]
    },
    {
        question: "If you were to quit a job, how would you say goodbye?",
        answers: [
            {
                type: "Paul",
                content: "Just leave, but dream about burning the place to the ground"
            },
            {
                type: "George",
                content: "Make sure all harsh feelings are patched up and make sure everyone knows I've enjoyed them"
            },
            {
                type: "Ringo",
                content: "Tell everyone EXACTLY how I feel about them, including my boss, trash the place, and get escorted off the premisis"
            },
            {
                type: "John",
                content: "Send around a thank you e-mail, even if I could care less what would happen to those blokes"
            }
        ]
    },
    {
        question: "In a spouse, I look for someone who...",
        answers: [
            {
                type: "Paul",
                content: "Adores me like a God"
            },
            {
                type: "George",
                content: "Is truly my equal"
            },
            {
                type: "Ringo",
                content: "Is loving, intelligent and easygoing"
            },            
            {
                type: "John",
                content: "Wants nothing but fun, love, and sex"
            }
        ]
    },
    {
        question: "Your thoughts on cheating?",
        answers: [
            {
                type: "Paul",
                content: "I try to keep things simple and drama-free, so I'm not crazy about it"
            },
            {
                type: "George",
                content: "No way. Think about how I will be portrayed if I'm caught!"
            },
            {
                type: "Ringo",
                content: "Only if I'm really not in love"
            },            
            {
                type: "John",
                content: "If it feels good, do it"
            }
        ]
    },
    {
        question: "What would you do for an anniversary, and what would you expect your love to do for you?",
        answers: [
            {
                type: "Paul",
                content: "Oh, shoot, I forgot. I'll just pick up some flowers. And I guess I don't care if they do anything"
            },
            {
                type: "George",
                content: "I might expect a little something from them and get them a little something as well"
            },
            {
                type: "Ringo",
                content: "I would write a meaningful poem or song and be upset if they didn't do the same"
            },
            {
                type: "John",
                content: "Go all out and plan something huge and great and be very hurt if they didn't do something equally amazing"
            }
        ]
    },
    {
        question: "When it comes to raising children, I would be...",
        answers: [
            {
                type: "Paul",
                content: "The tough parent. I would love my kids with all my heart, but I want them to be raised well"
            },
            {
                type: "George",
                content: "The interesting one. I would teach and show them new things all the time"
            },
            {
                type: "Ringo",
                content: "The fun/easy one. I'd let the other parent do the yelling"
            },            
            {
                type: "John",
                content: "The devoted one. I would want my child to have an amazing childhood filled with wonderful memories"
            }
        ]
    },
    {
        question: "Do you owe society anything?",
        answers: [
            {
                type: "Paul",
                content: "No! Society gives me nothing and expects everything. What more could they want??"
            },
            {
                type: "George",
                content: "Yes and no. They've given and taken things form me, it's pretty even"
            },
            {
                type: "Ringo",
                content: "Anyone as brilliant and talented as me owes the people something"
            },
            {
                type: "John",
                content: "Kind of. Life could be a lot worse, but it could be a lot better"
            }
        ]
    },
    {
        question: "Is there a definite difference between wrong and right?",
        answers: [
            {
                type: "Paul",
                content: "No. It all depends on the situation"
            },
            {
                type: "George",
                content: "Yes. If you kill someone, it's bad. If you donate money, it's good"
            },
            {
                type: "Ringo",
                content: "Depends what we are talking about. Things like killing and rape are always wrong, but stealing may be ok in some cases"
            },            
            {
                type: "John",
                content: "I don't know, man. I calls 'em as I sees 'em."
            }
        ]
    },
    {
        question: "As a kid, I saw church as...",
        answers: [
            {
                type: "Paul",
                content: "Fun, but not because they made it so. I found my own ways to have fun"
            },
            {
                type: "George",
                content: "An annoying waste of time my parents dragged me to. None of it made any sense!"
            },
            {
                type: "Ringo",
                content: "A little of both. It could be enjoyable, but I'm not sure I believe everything they told me"
            },            
            {
                type: "John",
                content: "An amazing, fun, informative time. I only have positive memories of church"
            }
        ]
    },
    {
        question: "Do pets go to heaven?",
        answers: [
            {
                type: "Paul",
                content: "Give me a break, of course they do!"
            },
            {
                type: "George",
                content: "Either that or they are reborn"
            },
            {
                type: "Ringo",
                content: "Nope. They don't have souls like humans do. The Bible says so"
            },
            {
                type: "John",
                content: "Fluffy... might not get into heaven? :'("
            }
        ]
    },
    {
        question: "In your family, you are...",
        answers: [
            {
                type: "Paul",
                content: "The definite leader. We do what I say"
            },
            {
                type: "George",
                content: "A lazy member. I don't really make an effort to lead or be lead, I just go with the flow"
            },
            {
                type: "Ringo",
                content: "The secret leader. I don't openly tell everyone what to do, but I have enough influence to get them to do what I want"
            },            
            {
                type: "John",
                content: "A total team player. I don't boss people around, but I'm no marshmallow, either"
            }
        ]
    },
    {
        question: "Do you lie?",
        answers: [
            {
                type: "Paul",
                content: "I keep my conscious clear by not lying, but avoiding the question"
            },
            {
                type: "George",
                content: "I would lie to cover my own ass, but not spare someone's feelings. I'm normally pretty honest about that."
            },
            {
                type: "Ringo",
                content: "To be honest, (ha-ha bad pun) I'm horrible at lying. I'm pretty honest, mostly because I have no choice"
            },
            {
                type: "John",
                content: "Yes, I do. It can save people's ego's, and my own"
            }
        ]
    },
    {
        question: "Do you believe in God?",
        answers: [
            {
                type: "Paul",
                content: "I believe in a god, but I don't know if he's as amazing and as powerful as priests make him out to be"
            },
            {
                type: "George",
                content: "Yes. I'm sure He exists"
            },
            {
                type: "Ringo",
                content: "I would like to, but I honestly don't know"
            },            
            {
                type: "John",
                content: "No. Religion, God, church, it's all fake and wrong"
            }
        ]
    },
    {
        question: "If you were to commit suicide...",
        answers: [
            {
                type: "Paul",
                content: "I would take everyone with me"
            },
            {
                type: "George",
                content: "Only for my children or if I was terminally ill"
            },
            {
                type: "Ringo",
                content: "It would have to be painless"
            },            
            {
                type: "John",
                content: "I couldn't do it."
            }
        ]
    }
  ];
  
  export default quizQuestions;