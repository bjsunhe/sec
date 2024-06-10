
let allNodes=[]

const contextNodes = document.querySelectorAll(`xbrli\\:context`);
contextNodes.forEach(contextNode=>{
    context(contextNode.getAttribute("id"))
})


function context(id){
        // Select the desired nodes
        const contextNode = document.querySelector(`xbrli\\:context[id="${id}"]`);
        const identifierNode = contextNode.querySelector('xbrli\\:identifier');
        const startDateNode = contextNode.querySelector('xbrli\\:startdate');
        const endDateNode = contextNode.querySelector('xbrli\\:enddate');
        const instant=contextNode.querySelector('xbrli\\:instant');        
        const explicitMemberNode = contextNode.querySelector('xbrldi\\:explicitmember');

        // Extract the data
        const category = {
            id: contextNode.getAttribute('id'),
            // identifier: identifierNode.textContent,
            startDate: startDateNode?.textContent,
            endDate: endDateNode?.textContent,
            instant:instant?.textContent,
            dimension: explicitMemberNode?.getAttribute('dimension'),
            member: explicitMemberNode?.textContent
        };

        


        const contextNodes = document.querySelectorAll(`ix\\:nonfraction[contextref="${id}"]`);
        let child={}
        contextNodes.forEach(i=>{
            child[i.getAttribute("name")]=i.textContent
        })
        // allNodes[category['member']]={
        //     category:category,
        //     child:child
        // }

        allNodes.push({
            ...category,
            child
        })
}


console.log(allNodes.filter(i=>i.member&&!i.instant))
console.log(allNodes.filter(i=>i.member&&!i.startDate))
