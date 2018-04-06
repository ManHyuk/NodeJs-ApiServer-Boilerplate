const Joi = require('joi');

module.exports = {
    /*
     USER Validation
     */
    // POST - /users/register
    user_register: {
        body: {
            id: Joi.string().regex(/^[A-Za-z0-9+]*$/).required(),
            nickname: Joi.string().required(),
            pw1: Joi.string().required(),
            pw2: Joi.string().required()
        }
    },
    // POST - /users/login
    user_login: {
        body: {
            id: Joi.string().regex(/^[A-Za-z0-9+]*$/).required(),
            pw: Joi.string().required()
        }
    },
    
    
    /*
     TEAM Validation
     */
    // POST - /teams
    team_create: {
        body: {
            name: Joi.string().required(),
            max_cap: Joi.number().required(),
            category: Joi.string().required(),
            rule: Joi.string().required(),
            is_public: Joi.boolean().required()
        }
    },
    // GET - /teams/:team_idx
    team_list: {
        params: {
            team_idx: Joi.number().required()
        }
    },
    // POST - /teams/:team_idx/apply
    team_apply: {
        params: {
            team_idx: Joi.number().required()
        }
    },
    // PUT - /teams/:team_idx/confirm
    team_confirm: {
        body: {
            user_idx: Joi.string().required(),
            is_accept: Joi.boolean().required(),
        },
        params: {
            team_idx: Joi.number().required()
        }
    },
    
    
    /*
     POST Validation
     */
    // GET - /teams/:team_idx/posts
    // TODO BODY에 카테고리 플래그 받기
    post_list: {
        params: {
            team_idx: Joi.number().required()
        }
    },
    // POST - /teams/:team_idx/posts
    post_write: {
        body: {
            contents: Joi.string().required()
        },
        params: {
            team_idx: Joi.number().required()
        }
    },
    // PUT - /teams/:team_idx/posts/:post_id
    post_edit: {
        body: {
            contents: Joi.string().required()
        },
        params: {
            team_idx: Joi.number().required(),
            post_idx: Joi.number().required()
        }
    },
    
    
    /*
     TEST Validation
     */
    // GET - /teams/:team_idx/test
    test_list: {
        params: {
            team_idx: Joi.number().required()
        }
    },
    // POST - /teams/:team_idx/test
    test_create: {
        body: {
            title: Joi.string().required(),
            contents: Joi.string().required(),
            date: Joi.string().required(),
            cutline: Joi.string().required(),
            time_limit: Joi.string().required(),
            date_limit: Joi.string().required()
        },
        params: {
            team_idx: Joi.number().required()
        }
    },
};