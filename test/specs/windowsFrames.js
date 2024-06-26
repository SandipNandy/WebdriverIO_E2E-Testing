describe('Windows and Frames Miscellanous',async()=>
         {
                  
    it('Parent and Child windows switch',async()=>
   {  
        await  browser.url("/AutomationPractice/")  
        await $(".blinkingText").click()   
            
       const handles = await browser.getWindowHandles()// 2 windows -  
       await browser.switchToWindow(handles[1])
            
        console.log(await $("h1").getText())
        console.log(await browser.getTitle())//http://automationpractice.com/
       
            await browser.closeWindow()
        await browser.switchToWindow(handles[0])
       console.log(await browser.getTitle())//LoginPage Practise | http://automationpractice.com/
       //*********************************** */
       await browser.newWindow("https://google.com")//automation
       console.log(await browser.getTitle())// http://automationpractice.com/
       await browser.switchWindow("http://automationpractice.com/")
       await $("#username").setValue("helloiswitchedback")
       await browser.pause(3000)

   })

   it('Frames switch',async()=>

   {
      await  browser.url("/AutomationPractice/")
      await  $("#mousehover").scrollIntoView()
    console.log(await $$("a").length)//27
    await browser.switchToFrame(await $("[id='courses-iframe']"))
    console.log(await $("=Courses").getTagName())
    console.log(await $$("a").length)//118
    await browser.switchToFrame(null)
    console.log(await $$("a").length)//27

   })


})
