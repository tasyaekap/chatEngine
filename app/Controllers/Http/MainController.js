'use strict'
const Chat = use('App/Models/Chat')

class MainController {
    async chatpost({ request, response }){
        
        const chat = new Chat()
        const ch = request.all()

        chat.uname = ch.uname
        chat.idawb = ch.idawb
        chat.message = ch.message

        await chat.save()

        return response.status(200).json(chat)
    }

    async getChat ({ request, params, response}) {
        const resp = await Chat.where({ idawb: params.idawb })
        .orderBy('created_at', 'asc').fetch()
        console.log(new Date())

        return response.status(200).json(resp)
    }

    async delRoomChat ({ response, params}) {
        const resp = await Chat.findBy('idawb', params.idawb)

        await resp.delete()
        return response.status(200).json({'message':'RoomChat Deleted'})
    }
}

module.exports = MainController
