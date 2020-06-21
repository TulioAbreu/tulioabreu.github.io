const projectsListComponent = document.getElementById("projects-list");

let projects = [
    {
        title: "Omnistack Week #10",
        imageURL: "./assets/omnistack-week-10.png",
        tags: ["ReactJS", "React Native", "NodeJS", "Javascript"],
        description: "Aplicação desenvolvida em um curso online de duração de uma semana. Nesta aplicação é implementada uma espécie de listagem de desenvolvedores. Na página da web são exibidos usuários cadastrados nas proximidades, fazendo o uso de geolocalização. No aplicativo, desenvolvido em React Native, é possível visualizar as localizações em um mapa e acessar o perfil do Github dos usuários próximos.",
        repoURL: "https://github.com/TulioAbreu/omnistack-week-10/",
    },
    {
        title: "Arclass Website",
        imageURL: "./assets/arclass.png",
        tags: ["ReactJS", "Javascript"],
        description: "Protótipo de website desenvolvido para uma apresentação da disciplina de Empreendedorismo, na universidade. A idéia desse protótipo era apresentar um \"produto\", que no caso era um marketplace de modelos 3D para sua utilização com tecnologia de realidade aumentada. Por se tratar apenas de um protótipo, apenas a interface foi implementada, sem qualquer funcionalidade real.",
        repoURL: "https://github.com/TulioAbreu/arclass-website",
    },
    {
        title: "Pokedéx JS",
        imageURL: "./assets/pokedexjs.png",
        tags: ["ReactJS", "NodeJS", "MongoDB", "Bootstrap", "Javascript"],
        description: "Aplicação web desenvolvida para a disciplina de Gerência de Dados da Web, na universidade. Esta aplicação é basicamente um repositório de buscas de dados sobre Pokémon. Todos os dados presentes nas páginas são extraídos e atualizados a partir de outras páginas da web de forma automática. Também foi implementado um mecanismo de armazenamento que funciona como uma espécie de cache temporário, para evitar repetidas requisições similares nas mesmas páginas.",
        repoURL: "https://github.com/TulioAbreu/pokedex-js",
    },
    {
        title:"Omnistack Week #8",
        imageURL: "./assets/tindev.png",
        tags: ["ReactJS", "MongoDB", "NodeJS", "Javascript"],
        description: "Aplicação desenvolvida em um curso online de duração de uma semana. Esta aplicação é uma pequena rede social baseada no Tinder, voltada para desenvolvedores. Neste caso, o usuário deve inserir o seu perfil do Github para realizar o cadastro. A partir disso será exibida uma outra página onde são outros usuários cadastrados. É possível curtir ou descurtir outros desenvolvedores e caso haja um \"match\", é exibida uma janela informativa em tempo real.",
        repoURL: "https://github.com/TulioAbreu/tindev",
    },
    {
        title: "MyAnimelistSongs",
        tags: ["NodeJS", "Javascript"],
        description: "Este é um script feito em NodeJS para se montar uma lista de todas as músicas de abertura e encerramento de animações assitidas. A partir de um nome de perfil do MyAnimeList, é realizada a extração na web dos nomes dessas músicas de todos as animações adicionadas ao perfil.",
        repoURL: "https://github.com/TulioAbreu/my-animelist-songs",
    },
    {
        title: "Uri Online Judge",
        tags: ["C++", "Haskell", "Python"],
        description: "Este é um repositório onde guardo as minhas soluções submetidas no site UriOnlineJudge. Este site contém diversos problemas de programação para serem resolvidos.",
        repoURL: "https://github.com/TulioAbreu/uri-online-judge",
    },
    {

        title: "Firefighter Problem",
        tags: ["Python"],
        description: "Esta é uma ferramenta desenvolvida para a disciplina Otimização em Redes, na universidade. Participou também do projeto <a href=\"https://www.linkedin.com/in/obrunodias/\">Bruno Dias</a>. A partir de instâncias pré-definidas, a ferramenta deverá encontrar uma solução para o problema de brigadistas em grafos. O enunciado é explicado mais detalhadamente no \"readme\" do repositório.",
        repoURL: "https://github.com/TulioAbreu/firefighter-problem",
    },
    {
        title: "Administração de repúblicas",
        tags: ["Django", "Python"],
        description: "Este é um website desenvolvido para a disciplina de Programação Web, na Universidade. Participou também do projeto <a href=\"https://www.linkedin.com/in/layla-miranda-103928192/\">Layla Miranda</a>. O objetivo do projeto era implementar um website que funcionasse como um anúncio para república, mas que também controlasse necessidades da casa como, por exemplo, a divisão das contas.",
        repoURL: "https://github.com/TulioAbreu/administracao-republica",
    }
];

function renderProjectsList(projects) {
    function addChild(container, tag, attributesList, innerHTML) {
        const component = document.createElement(tag);
        for (let i = 0; i < attributesList.length; ++i) {
            const attribute = attributesList[i];
            component.setAttribute(attribute.key, attribute.value);
        }
        component.innerHTML = innerHTML;
        container.appendChild(component);
    }

    for (let i = 0; i < projects.length; ++i) {
        const projectData = projects[i];
        const projectContainerComponent = document.createElement("div");
        projectContainerComponent.setAttribute("class", "project-container");

        if (projectData.title) {
            addChild(projectContainerComponent, "div", [
                { key: "class", value: "project-title" }
            ], projectData.title);
        }

        if (projectData.imageURL) {
            addChild(projectContainerComponent, "img", [
                {key: "class", value: "project-image"},
                {key: "src", value: projectData.imageURL},
                {key: "alt", value: projectData.title},
            ], "");
        }

        if (projectData.tags) {
            addChild(projectContainerComponent, "div", [
                {key: "class", value: "used-techs"}
            ], projectData.tags.join(", "));
        }

        if (projectData.description) {
            addChild(projectContainerComponent, "div", [
                {key: "class", value: "text project-description"}
            ], 
                (projectData.repoURL) 
                    ? projectData.description + ` <a src="${projectData.repoURL}" class="repo-link">Veja o repositório</a>.`
                    : projectData.description
            );
        }
        projectsListComponent.appendChild(projectContainerComponent);
    }
}

renderProjectsList(projects);
