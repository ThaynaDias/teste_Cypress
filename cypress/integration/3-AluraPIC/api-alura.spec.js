describe('Busca fotos  e dados', () => {

    it.only('busca fotos do flavio', () => {
       const tempoEsperado = Math.random() * 3000
       
        cy.request({ // vai fazer um requisição para buscar o method pela url
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
       
        }).then((res) => { //vai retornar 
            expect(res.status).to.be.equal(200) //para confirmar se essas propriedades  
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})