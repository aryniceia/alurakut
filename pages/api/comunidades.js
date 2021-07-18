import { SiteClient } from 'datocms-client';
import { ReturnCodes } from 'pako';

export default async function recebedorDeRequests (request, response){

    if(request.method === 'POST') {

        const TOKEN = '47d0102ebb1fd1bc1bb9f158169772'; 
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "967825", //ID Model "comunidades" criado pelo datocms
            ...request.body, 
            //title: "Comunidades Teste",
            //imageUrl: "https://github.com/aryniceia.png",
            //creatorSlug:"aryaneniceia"   
        })

        response.json({
            dados: 'Qualquer dado',
            registroCriado: registroCriado,

        })
        return;
    }

    response.status(404).json ({
        message: 'Nada no GET, mas tem no POST'
    })
}