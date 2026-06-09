# 🎓 EduSpace

> Plataforma inteligente para gestão e agendamento de recursos educacionais.

![EduSpace Banner](./assets/screenshots/banner.png)

## 📖 Sobre o Projeto

O **EduSpace** é uma plataforma web desenvolvida para simplificar e modernizar o gerenciamento de recursos acadêmicos em instituições de ensino.

A solução permite que professores realizem solicitações de laboratórios, equipamentos e espaços educacionais através de um calendário intuitivo, enquanto coordenadores e administradores analisam, aprovam e gerenciam as reservas de forma centralizada.

O objetivo é reduzir conflitos de agenda, otimizar a utilização dos recursos da instituição e proporcionar maior organização nos processos acadêmicos.

---

## ✨ Principais Funcionalidades

### 👨‍🏫 Portal do Professor

* Agendamento de aulas via calendário.
* Reserva de laboratórios.
* Solicitação de equipamentos.
* Consulta de disponibilidade em tempo real.
* Histórico de reservas.
* Acompanhamento do status das solicitações.

### 👨‍💼 Portal da Coordenação

* Aprovação e rejeição de solicitações.
* Controle de conflitos de horários.
* Visualização completa da agenda institucional.
* Gerenciamento de recursos disponíveis.

### 🛠 Portal Administrativo

* Gestão de usuários.
* Controle de permissões.
* Cadastro de laboratórios.
* Cadastro de equipamentos.
* Cadastro de disciplinas.
* Relatórios e indicadores operacionais.

---

## 📸 Screenshots

### 🔐 Login

![Login](./assets/screenshots/login.png)

---

### 📊 Dashboard

![Dashboard](./assets/screenshots/dashboard.png)

---

### 📅 Calendário de Reservas

![Calendário](./assets/screenshots/calendar.png)

---

### 🎥 Solicitação de Equipamentos

![Equipamentos](./assets/screenshots/equipments.png)

---

### ✅ Aprovação de Reservas

![Aprovação](./assets/screenshots/approvals.png)

---

### 🏫 Gestão de Laboratórios

![Laboratórios](./assets/screenshots/laboratories.png)

---

## 🚀 Fluxo de Utilização

```text
Professor
    ↓
Seleciona data e horário
    ↓
Escolhe laboratório
    ↓
Seleciona equipamentos
    ↓
Envia solicitação
    ↓
Coordenador/Admin analisa
    ↓
Aprova ou rejeita
    ↓
Reserva confirmada
```

---

## 🏗 Arquitetura

```text
Frontend (React + Vite)
            ↓
        REST API
            ↓
Backend (Node.js + Express)
            ↓
      Banco de Dados
```

---

## 🛠 Tecnologias Utilizadas

### Frontend

* React
* Vite
* JavaScript
* React Router
* Axios
* FullCalendar
* Responsive Design

### Backend

* Node.js
* Express.js
* JWT Authentication
* REST API

### Banco de Dados

* MySQL

---

## 🔐 Controle de Acesso

| Perfil        | Permissões                   |
| ------------- | ---------------------------- |
| Professor     | Solicitar reservas           |
| Coordenador   | Aprovar e gerenciar reservas |
| Administrador | Controle total da plataforma |

---

## 📊 Benefícios

* Centralização dos agendamentos.
* Redução de conflitos de horários.
* Melhor utilização dos recursos acadêmicos.
* Processo digital de aprovação.
* Histórico completo de reservas.
* Maior transparência operacional.

---

## 📱 Responsividade

O EduSpace foi desenvolvido para funcionar perfeitamente em:

* 💻 Desktop
* 📱 Smartphones
* 📟 Tablets

---

## 🚀 Instalação

### Backend

```bash
cd backend

npm install

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 📂 Estrutura do Projeto

```text
eduspace/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── assets/
│   └── screenshots/
│       ├── banner.png
│       ├── login.png
│       ├── dashboard.png
│       ├── calendar.png
│       ├── equipments.png
│       ├── approvals.png
│       └── laboratories.png
│
└── README.md
```

---

## 🎯 Roadmap

* [x] Gestão de usuários
* [x] Agendamento de aulas
* [x] Reserva de laboratórios
* [x] Reserva de equipamentos
* [x] Fluxo de aprovação
* [x] Dashboard administrativo
* [ ] Notificações automáticas
* [ ] Relatórios avançados
* [ ] Aplicativo mobile
* [ ] Integração com Google Calendar

---

## 📄 Licença

Projeto MVP desenvolvido para modernizar a gestão de recursos educacionais e otimizar processos acadêmicos através de uma plataforma simples, eficiente e escalável.

---

Desenvolvido com ❤️ utilizando React, Vite, Node.js e MySQL.
