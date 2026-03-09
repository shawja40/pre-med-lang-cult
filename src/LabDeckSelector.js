export default function LabDeckSelector({ onSelection }){
    
    const moduleLinks = {
        'Prefixes': './Prefixes.json',
        'Suffixes': './Suffixes.json',
        'Common Terms': './Common_Terms.json',
        'Abbreviations': './Abbrev.json',
    }

    // const selectLink = (selection) => {
    //     setCurLink(selection);
    // }

    const handleSelection = (e) => {
        const selectedModule = e.target.value;
        if (!selectedModule) return;
        const link = moduleLinks[selectedModule]

        onSelection(link);
    }

    return (
        <>
            <label htmlFor="deck-select" className="
                flex
                text-center
                p-1
                text-white 
                bg-blue-500 
                outline-blue-500
                outline
                h-8
                w-[30%]
            ">Deck</label>
            <select
                id="deck-select"
                defaultValue="Select a deck"
                onChange={handleSelection}
                className="hide-selected-count 
                        p-1
                        outline-blue-500
                        outline
                        h-8
                        ml-0
                        mr-0
                        w-fit">
                <option value="" selected>Select a deck</option>       

                {/* Generates an option in the select menu for each key */}
                {Object.keys(moduleLinks).map(name => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))
                }
            </select>
        </>
    )
    
}

