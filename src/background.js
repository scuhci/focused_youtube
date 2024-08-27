chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "reload")
        try {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                // get the second-level domain of active tab
                var domain = new URL(tabs[0].url).hostname
                var secondLevelDomain = domain.split(".").reverse()[1]

                if (secondLevelDomain === "youtube") {
                    chrome.tabs.reload(tabs[0].id)
                }
            })

            sendResponse({message: "OK", status: "200", data: null})
            return true
        } catch (error) {
            sendResponse({message: error.message, status: "500", data: null})
            return false
        }
    }
)