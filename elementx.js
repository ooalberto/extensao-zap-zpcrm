
// elementx.js

(function () {
    const TRANSLATIONS = {
        "Botzo CRM": "ZPCRM",
        "Botzo": "ZPCRM",
        "Welcome to Botzo CRM": "Bem-vindo ao ZPCRM",
        "Loading...": "Carregando...",
        "Monthly Plan": "Plano Mensal",
        "Yearly Plan": "Plano Anual",
        "WhatsApp CRM": "ZPCRM",
        "1 Days Trial": "1 Dia de Teste",
        "Message automation": "Automação de mensagens",
        "Unlimited messaging": "Mensagens ilimitadas",
        "Contact tagging and segmentation functionality": "Etiquetagem e segmentação de contatos",
        "Unlimited contact management": "Gerenciamento ilimitado de contatos",
        "Full conversation history": "Histórico completo de conversas",
        "Detailed reports and analysis": "Relatórios e análises detalhados",
        "Advanced integration with WhatsApp": "Integração avançada com WhatsApp",
        "Priority support via email and live chat": "Suporte prioritário por e-mail e chat ao vivo",
        "All features of the free plan": "Todos os recursos do plano gratuito",
        "R$ Get offer": "R$ Obter Oferta",
        "Get offer": "Obter Oferta",
        "Obtén oferta": "Obter Oferta",
        "buy": "COMPRAR",
        "USD": "R$",
        "License Details": "Detalhes da Licença",
        "Here you will find detailed information about your license and options to uninstall it if necessary..":
            "Aqui você encontrará informações detalhadas sobre sua licença e opções para desinstalá-la, se necessário.",
        "User:": "Usuário:",
        "Telephone:": "Telefone:",
        "License:": "Licença:",
        "Plan:": "Plano:",
        "Next payment Date:": "Próxima data de pagamento:",
        "Uninstall license": "Desinstalar licença",
        "Close": "Fechar",
        "You must have Valid & Active License Key": "Você precisa de uma Chave de Licença Válida e Ativa",
        "Enter your license key & click on Activate to Activate your License Key.":
            "Insira sua chave de licença e clique em Ativar para ativar sua chave de licença.",
        "Activate Now": "Ativar Agora"
    };

    const LOGO_URLS = {
        old: "https://zpcrm.com.br/imagens/logo.png",
        new: "https://zpcrm.com.br/imagens/logo.png"
    };
    // Altere para o seu link personalizado
    const CUSTOM_DOMAIN = "extensao.zpcrm.com.br";

    function replaceTexts() {
        document.querySelectorAll("*:not(script):not(style)").forEach((element) => {
            element.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    Object.keys(TRANSLATIONS).forEach((key) => {
                        if (node.nodeValue.includes(key)) {
                            node.nodeValue = node.nodeValue.replace(new RegExp(key, "g"), TRANSLATIONS[key]);
                        }
                    });
                }
            });
        });
    }

    function replaceLogo() {
        document.querySelectorAll(`img[src="${LOGO_URLS.old}"]`).forEach((img) => {
            img.src = LOGO_URLS.new;
            console.log(`Logo trocado: ${LOGO_URLS.old} -> ${LOGO_URLS.new}`);
        });
    }

    function replaceLinks() {
        const TARGET_LINKS = [
            "https://web.whatsapp.com/[object%20Object]",
            "https://wa.me/#?text=WA%20CRM%201%20Days%20Trail",
            "https://web.whatsapp.com/#"
        ];
        const REPLACEMENT_LINK = `https://${CUSTOM_DOMAIN}`;

        document.querySelectorAll("a").forEach((link) => {
            TARGET_LINKS.forEach((target) => {
                if (link.href.includes(target)) {
                    link.href = REPLACEMENT_LINK;
                    console.log(`Link substituído: ${target} -> ${REPLACEMENT_LINK}`);
                }
            });

            if (link.href.includes("lotsofcode.in")) {
                const novoHref = link.href.replace(/lotsofcode\.in/g, CUSTOM_DOMAIN);
                console.log(`Link lotsofcode.in substituído: ${link.href} -> ${novoHref}`);
                link.href = novoHref;
            }
        });
    }

    function replacePrices() {
        document.querySelectorAll("div, span, p").forEach((element) => {
            if (element.innerText.includes("USD")) {
                element.innerText = element.innerText.replace("USD", "R$");
                console.log("Preço atualizado para R$.");
            }
        });
    }

    function fixGroupMessageSending() {
        const originalSendTextMsgToChat = window.Store?.SendTextMsgToChat;

        if (originalSendTextMsgToChat) {
            window.Store.SendTextMsgToChat = async function (chat, ...args) {
                try {
                    if (chat.isGroup && !chat.id.server.includes("g.us")) {
                        chat.id.server = "g.us";
                        console.log("ID do grupo corrigido:", chat.id.server);
                    }
                    return originalSendTextMsgToChat.apply(this, [chat, ...args]);
                } catch (error) {
                    console.error("Erro ao corrigir envio para grupos:", error);
                }
            };
            console.log("Correção de grupo aplicada.");
        }
    }

    function monitorDOMChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    replaceTexts();
                    replaceLogo();
                    replaceLinks();
                    replacePrices();

                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SCRIPT' && node.src.includes('injectScript.bundle')) {
                            node.addEventListener('load', () => {
                                replaceTexts();
                                replaceLogo();
                                replaceLinks();
                                replacePrices();
                            });
                        }
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    function initialize() {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", () => {
                replaceTexts();
                replaceLogo();
                replaceLinks();
                replacePrices();
                fixGroupMessageSending();
                monitorDOMChanges();
            });
        } else {
            replaceTexts();
            replaceLogo();
            replaceLinks();
            replacePrices();
            fixGroupMessageSending();
            monitorDOMChanges();
        }
    }

    initialize();
})();

