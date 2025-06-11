(function () {
    // ✅ CONFIGURAÇÃO CENTRAL
    const whiteLabelConfig = {
        brandName: "ZPCRM",
        version: "3.8.1.0",
        logo: {
            old: "https://licencas-new.zpcrm.com.br/assets/images/logopng.png",
            new: "https://licencas-new.zpcrm.com.br/assets/images/logowebpng.webp" // 🔧 PERSONALIZAR
        },
        whatsapp: {
            oldNumber: "5511954875149",
            newNumber: "5511954875149" // 🔧 PERSONALIZAR
        },
        customDomain: "zpcrm.com.br/ZPCRMcrm", // 🔧 PERSONALIZAR
        links: {
            tutorials: "https://zpcrm.com.br/crmvideoaulas", // 🔧 PERSONALIZAR
            RequestFeature: "https://zpcrm.com.br/ZPCRMcrm", // 🔧 PERSONALIZAR
            privacyPolicy: "https://zpcrm.com.br/politica-de-privacidade" // 🔧 PERSONALIZAR
        },
        priceSymbolOld: "USD",
        priceSymbolNew: "R$",
        supportMessageEN: "Hello there! I am facing an issue with Extension. I need your assistance.",
        supportMessagePT: "Olá! Estou com um problema com a Extensão. Preciso da sua ajuda."
    };

    // ✅ VARIÁVEIS de apoio para o LOGO
    const LOGO_URL = whiteLabelConfig.logo.new;
    const LOGO_LINK = `https://${whiteLabelConfig.customDomain}`; // ✅ URL absoluto garantido
    const brandFallback = "ZPCRM";
    const version = whiteLabelConfig.version;

    // ✅ TEXTOS QUE SERÃO TRADUZIDOS/SUBSTITUÍDOS
    const TRANSLATIONS = {
        "Botzo": brandFallback,
        "Extensão CRM": `${brandFallback} ${version}`,
        "Bem-vindo ao CRM": `Bem-vindo ao ${brandFallback} ${version}`,
        "Loading...": "Carregando...",
        "Monthly Plan": "Plano Mensal",
        "Yearly Plan": "Plano Anual",
        "WhatsApp CRM": brandFallback,
        "puppyCRM": brandFallback,
        "Premium 3 Days Trial": "- 3 Dias de Teste",
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
        "USD": whiteLabelConfig.priceSymbolNew,
        "License Details": "Detalhes da Licença",
        "Here you will find detailed information about your license and options to uninstall it if necessary.": "Aqui você encontrará informações detalhadas sobre sua licença e opções para desinstalá-la, se necessário.",
        "User:": "Usuário:",
        "Phone:": "Telefone:",
        "License:": "Licença:",
        "Plan:": "Plano:",
        "Next Payment:": "Próximo Pagamento:",
        "Uninstall License": "Desinstalar Licença",
        "Close": "Fechar",
        "You must have Valid & Active License Key": "Você precisa de uma Chave de Licença Válida e Ativa",
        "Enter your license key & click on Activate to Activate your License Key.": "Insira sua chave de licença e clique em Ativar para ativar sua chave de licença.",
        "Activate Now": "Ativar Agora",
        "You must enter a key": "Você deve inserir uma chave",
        "Please enter your license key in the field below to activate advanced features.": "Insira sua chave de licença no campo abaixo para ativar recursos avançados.",
        "undefined": "indefinido",
        "Sort": "Organizar",
        "Validate": "VALIDAR",
        "Done": "Concluído",
        "To Do": "A Fazer",
        "Processing": "Processando",
        "Cancel": "Cancelar",
        "OK": "OK",
        "Column": "Coluna",
        "Digite o Nome da Coluna:": "Digite o Nome da Coluna:",
        "Adicionar": "Adicionar",
        "Excluir": "Excluir",
        "Inbox": "Caixa de Entrada",
        "Perto": "Fechar",
        "Cancelararararar": "Cancelar",
        "Cancelararar": "Cancelar",
        "Cancelarararar": "Cancelar",
        "Cancelarar": "Cancelar",
        "Recent 50 Chats": "50 Chats Recentes",
        "Automação de mensagensMensagens ilimitadasEtiquetagem e segmentação de contatosGerenciamento ilimitado de contatosHistórico completo de conversasRelatórios e análises detalhadosIntegração avançada com WhatsAppSuporte prioritário por e-mail e chat ao vivoTodos os recursos do plano gratuito": "Recursos incluídos:<br>✅ Mensagens ilimitadas<br>✅ Automação de mensagens<br>✅ Etiquetagem e segmentação de contatos<br>✅ Gerenciamento ilimitado de contatos<br>✅ Histórico completo de conversas<br>✅ Relatórios e análises detalhados<br>✅ Integração avançada com o WhatsApp<br>✅ Suporte prioritário por e-mail e chat ao vivo<br>✅ Todos os recursos do plano gratuito incluídos",
        "Your private user panel": "Seu painel de usuário privado",
        "Tools": "Ferramentas",
        "Sets of free functions": "Conjuntos de funções gratuitas",
        "Functions": "Funções",
        "Import and export contacts, personalized links, and much more...": "Importe e exporte contatos, links personalizados e muito mais...",
        "Kanban Board": "Quadro Kanban",
        "Organize all your clients with this powerful tool": "Organize todos os seus clientes com esta ferramenta poderosa",
        "Quick Reply": "Resposta Rápida",
        "Reply quickly": "Responda rapidamente",
        "Scheduled Notifications": "Notificações Agendadas",
        "Notify a customer in the future": "Notifique um cliente no futuro",
        "Outgoing Webhooks": "Webhooks de Saída",
        "Connect with Outer World": "Conecte-se com o Mundo Exterior",
        "Chatbots": "Chatbots",
        "Create and customize your autoresponder chatbot": "Crie e personalize seu chatbot de resposta automática",
        "Scheduled Broadcasts": "Transmissões Agendadas",
        "Schedule all your messages": "Agende todas as suas mensagens",
        "Templates": "Modelos",
        "Create and organize your templates": "Crie e organize seus modelos",
        "Flash Broadcasts": "Transmissões Rápidas",
        "Quick and emergency broadcasts": "Transmissões rápidas e de emergência",
        "Custom Tabs": "Abas Personalizadas",
        "Loading libraries…": "Carregando",
        "Choose Your Plan": "Escolha Seu Plano",
        "If you already have a license, click here to access:": "Se você já possui uma licença, clique aqui para acessar:",
        "Enter key": "Inserir chave",
        "Month": "Mensal",
        "Year": "Anual",
        "Buy": "Comprar",
        "Just a moment, we’ll be done shortly": "Aguarde um momento",
        "Is your license expired? Don't worry, renew easily and go back to enjoying all the benefits. Keep your access active and avoid interruptions in your service. Click now to renew and continue without problems!": "Sua licença expirou? Não se preocupe, renove facilmente e volte a aproveitar todos os benefícios. Mantenha seu acesso ativo e evite interrupções no serviço. Clique agora para renovar e continuar sem problemas!",
        "Renew License": "Renovar Licença",
        "Pair your labels and organize like a pro": "Emparelhe suas etiquetas e organize como um profissional"
    };

    // ✅ Função para normalizar URLs
    function normalizeURL(url) {
        return url
            .toLowerCase()
            .replace(/^https?:\/\//, '') // Remove http:// ou https://
            .replace(/^www\./, '') // Remove www.
            .replace(/\/+$/, '') // Remove barras finais
            .replace(/\/+/g, '/') // Normaliza barras duplas
            .split('?')[0] // Remove parâmetros
            .split('#')[0]; // Remove fragmentos
    }

    // ✅ Função para depurar links no DOM
    function debugLinks() {
        const links = document.querySelectorAll("a[href*='plwdesign.online']");
        if (links.length === 0) {
            console.log('Nenhum link com "plwdesign.online" encontrado no DOM.');
        } else {
            console.log(`Encontrados ${links.length} links com "plwdesign.online":`);
            links.forEach((link, index) => {
                console.log(`Link ${index + 1}: ${link.href}`);
            });
        }
    }

    // ✅ Corrigido: Força a logo com URL absoluto e adiciona log de depuração
    function fixOrInsertLogo() {
        document.querySelectorAll('a.logo img').forEach((img) => {
            if (!img.src || img.src.includes("undefined")) {
                const parentLink = img.closest("a.logo");
                if (parentLink) {
                    parentLink.remove();
                    console.log("Logo quebrada removida.");
                }
            }
        });

        const existingLogo = document.querySelector(`a.logo img[src="${LOGO_URL}"]`);
        if (!existingLogo) {
            const newLogo = document.createElement("a");
            newLogo.className = "logo";
            newLogo.href = LOGO_LINK;
            newLogo.target = "_blank";

            const img = document.createElement("img");
            img.src = LOGO_URL;
            img.alt = "ZPCRM Logo";

            newLogo.appendChild(img);

            const target = document.querySelector("header, .navbar, .top-bar, body");
            if (target) {
                target.insertBefore(newLogo, target.firstChild);
                console.log(`Logo ZPCRM inserida no target com href: ${newLogo.href}`);
            } else {
                document.body.insertBefore(newLogo, document.body.firstChild);
                console.log(`Logo ZPCRM inserida no body com href: ${newLogo.href}`);
            }
        } else {
            const parentLink = existingLogo.closest("a.logo");
            if (parentLink && parentLink.href !== LOGO_LINK) {
                parentLink.href = LOGO_LINK;
                console.log(`Logo existente corrigida com href: ${LOGO_LINK}`);
            }
        }
    }

    function replaceTexts() {
        document.querySelectorAll("*:not(script):not(style)").forEach((element) => {
            element.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    Object.entries(TRANSLATIONS).forEach(([key, value]) => {
                        if (node.nodeValue.includes(key)) {
                            node.nodeValue = node.nodeValue.replace(new RegExp(key, "g"), value);
                            console.log(`Texto substituído: "${key}" -> "${value}"`);
                        }
                    });
                }
            });
        });
    }

    function replaceLogo() {
        document.querySelectorAll(`img[src="${whiteLabelConfig.logo.old}"]`).forEach((img) => {
            img.src = whiteLabelConfig.logo.new;
            console.log(`Logo trocado: ${whiteLabelConfig.logo.old} -> ${whiteLabelConfig.logo.new}`);
        });
    }

    function replaceLinks() {
        const TARGET_LINKS = [
            "https://web.whatsapp.com/[object%20Object]",
            "https://wa.me/#?text=WA%20CRM%201%20Days%20Trail",
            "https://web.whatsapp.com/#"
        ];

        document.querySelectorAll("a").forEach((link) => {
            TARGET_LINKS.forEach((target) => {
                if (link.href.includes(target)) {
                    link.href = whiteLabelConfig.links.tutorials;
                    console.log(`Link substituído: ${target} -> ${whiteLabelConfig.links.tutorials}`);
                }
            });

            if (link.href.includes("plwdesign.online")) {
                link.href = link.href.replace(/plwdesign\.online/g, whiteLabelConfig.customDomain);
                console.log(`Link plwdesign.online substituído: ${link.href}`);
            }
        });
    }

    // ✅ Função reforçada para substituir links do menu
    function replaceMenuLinks() {
        const MENU_LINKS = [
            "https://zpcrm.com.br/ZPCRMcrm/Broadcast",
            "https://zpcrm.com.br/ZPCRMcrm/tab",
            "https://zpcrm.com.br/ZPCRMcrm/Templates",
            "https://zpcrm.com.br/ZPCRMcrm/workflow",
            "https://zpcrm.com.br/ZPCRMcrm/Schedulebroadcast",
            "https://zpcrm.com.br/ZPCRMcrm/schedules",
            "https://zpcrm.com.br/ZPCRMcrm/kanban",
            "https://zpcrm.com.br/ZPCRMcrm/utilities",
            "https://zpcrm.com.br/ZPCRMcrm/exportcontacts",
            "https://zpcrm.com.br/ZPCRMcrm/import-export",
            "https://zpcrm.com.br/ZPCRMcrm/Notes",
            "https://zpcrm.com.br/ZPCRMcrm/calendar",
            "https://zpcrm.com.br/ZPCRMcrm/blur",
            "https://zpcrm.com.br/ZPCRMcrm/linkgenerate",
            "https://zpcrm.com.br/ZPCRMcrm/AddGoogle",
            "https://zpcrm.com.br/ZPCRMcrm/Rapidresponce",
            "https://zpcrm.com.br/ZPCRMcrm/signature",
            "https://zpcrm.com.br/ZPCRMcrm/chatgpt",
            "https://zpcrm.com.br/ZPCRMcrm/googlecontact",
            "https://zpcrm.com.br/ZPCRMcrm/startchat"
        ];

        document.querySelectorAll("a").forEach((link) => {
            const normalizedLink = normalizeURL(link.href);
            MENU_LINKS.forEach((target) => {
                const normalizedTarget = normalizeURL(target);
                if (normalizedLink.includes(normalizedTarget)) {
                    const oldHref = link.href;
                    link.href = whiteLabelConfig.links.tutorials;
                    console.log(`Link do menu substituído: ${oldHref} -> ${whiteLabelConfig.links.tutorials}`);
                }
            });
        });

        // Depuração adicional
        debugLinks();
    }

    // ✅ Função para forçar substituição repetida de links do menu
    function forceMenuLinksReplacementRepeatedly() {
        let attempts = 0;
        const interval = setInterval(() => {
            console.log(`Tentativa ${attempts + 1} de substituição de links do menu...`);
            replaceMenuLinks();
            if (++attempts >= 20) {
                console.log('Finalizadas tentativas de substituição de links do menu.');
                clearInterval(interval);
            }
        }, 500);
    }

    function replaceSpecialLinks() {
        const { tutorials, RequestFeature, privacyPolicy } = whiteLabelConfig.links;
        console.log('whiteLabelConfig.links:', whiteLabelConfig.links);
        console.log('RequestFeature:', RequestFeature);

        document.querySelectorAll("a").forEach((link) => {
            if (link.href.includes("/tutorials")) {
                link.href = tutorials;
                console.log(`Link tutorials substituído: ${link.href}`);
            }
            if (link.href.includes("/request-feature")) {
                console.log('Substituindo link:', link.href, 'por:', RequestFeature);
                link.href = RequestFeature;
                console.log(`Link request-feature substituído: ${link.href}`);
            }
            if (link.href.includes("/privacy-policy")) {
                link.href = privacyPolicy;
                console.log(`Link privacy-policy substituído: ${link.href}`);
            }
        });
    }

    function replacePrices() {
        document.querySelectorAll("div, span, p").forEach((el) => {
            if (el.innerText.includes(whiteLabelConfig.priceSymbolOld)) {
                el.innerText = el.innerText.replace(whiteLabelConfig.priceSymbolOld, whiteLabelConfig.priceSymbolNew);
                console.log(`Símbolo de preço substituído: ${whiteLabelConfig.priceSymbolOld} -> ${whiteLabelConfig.priceSymbolNew}`);
            }
        });
    }

    function ensureWhatsAppLinkAlwaysUpdated() {
        const { oldNumber, newNumber } = whiteLabelConfig.whatsapp;

        document.querySelectorAll("a[href*='wa.me']").forEach((link) => {
            if (link.href.includes(oldNumber)) {
                link.href = link.href.replace(oldNumber, newNumber);
                console.log(`Link WhatsApp substituído: ${oldNumber} -> ${newNumber}`);
            }

            link.addEventListener("click", () => {
                if (link.href.includes(oldNumber)) {
                    link.href = link.href.replace(oldNumber, newNumber);
                    console.log(`Link WhatsApp substituído no clique: ${oldNumber} -> ${newNumber}`);
                }
            });
        });
    }

    function forceWhatsAppReplacementRepeatedly() {
        let attempts = 0;
        const interval = setInterval(() => {
            console.log(`Tentativa ${attempts + 1} de substituição de links WhatsApp...`);
            ensureWhatsAppLinkAlwaysUpdated();
            if (++attempts >= 20) {
                console.log('Finalizadas tentativas de substituição de links WhatsApp.');
                clearInterval(interval);
            }
        }, 500);
    }

    function replaceMessages() {
        const { supportMessageEN, supportMessagePT } = whiteLabelConfig;

        document.querySelectorAll("*:not(script):not(style)").forEach((el) => {
            el.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes(supportMessageEN)) {
                    node.nodeValue = node.nodeValue.replace(new RegExp(supportMessageEN, "g"), supportMessagePT);
                    console.log(`Mensagem de suporte substituída: "${supportMessageEN}" -> "${supportMessagePT}"`);
                }
            });
        });
    }

    function fixGroupMessageSending() {
        const originalSendTextMsgToChat = window.Store?.SendTextMsgToChat;

        if (originalSendTextMsgToChat) {
            window.Store.SendTextMsgToChat = async function (chat, ...args) {
                try {
                    if (chat.isGroup && !chat.id.server.includes("g.us")) {
                        chat.id.server = "g.us";
                        console.log('Corrigido servidor de grupo para "g.us"');
                    }
                    return originalSendTextMsgToChat.apply(this, [chat, ...args]);
                } catch (error) {
                    console.error("Erro ao corrigir envio para grupos:", error);
                }
            };
        }
    }

    function forceTextColorForSpecificTexts() {
        // Função não fornecida no código original, mantida como placeholder
        console.log('forceTextColorForSpecificTexts chamado (placeholder).');
    }

    function interceptUninstallFeedbackLink() {
        // Função não fornecida no código original, mantida como placeholder
        console.log('interceptUninstallFeedbackLink chamado (placeholder).');
    }

    function monitorDOMChanges() {
        const observer = new MutationObserver(() => {
            console.log('DOM alterado, aplicando substituições...');
            replaceTexts();
            replaceLogo();
            replaceLinks();
            replaceSpecialLinks();
            replacePrices();
            ensureWhatsAppLinkAlwaysUpdated();
            replaceMessages();
            fixOrInsertLogo();
            replaceMenuLinks();
            forceTextColorForSpecificTexts();
            interceptUninstallFeedbackLink();
        });

        observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
        console.log('Observador de DOM iniciado.');
    }

    function initialize() {
        const main = () => {
            console.log('Inicializando substituições...');
            replaceTexts();
            replaceLogo();
            replaceLinks();
            replaceSpecialLinks();
            replacePrices();
            ensureWhatsAppLinkAlwaysUpdated();
            forceWhatsAppReplacementRepeatedly();
            replaceMessages();
            fixGroupMessageSending();
            fixOrInsertLogo();
            replaceMenuLinks();
            forceMenuLinksReplacementRepeatedly();
            forceTextColorForSpecificTexts();
            interceptUninstallFeedbackLink();
            debugLinks(); // Depuração inicial
            monitorDOMChanges();
        };

        if (document.readyState === "loading") {
            console.log('Aguardando DOMContentLoaded...');
            document.addEventListener("DOMContentLoaded", main);
        } else {
            console.log('DOM já carregado, executando main...');
            main();
        }
    }

    initialize();
})();