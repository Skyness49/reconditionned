"use client";
import { useEffect } from "react";
const CSS = `
:root {
  --blue:#0A3782; --cyan:#0096C8; --gold:#F4B800;
  --green:#16a34a; --red:#dc2626; --purple:#7c3aed; --orange:#d97706;
  --bg:#f0f2f7; --card:#fff; --border:#e0e4ee;
  --text:#1a1a2e; --muted:#888;
}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:"Montserrat",Arial,sans-serif;background:var(--bg);color:var(--text);min-height:100vh;}

/* ── LOGIN ── */
.login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0A3782;}
.login-box{background:#fff;border-radius:20px;padding:40px 36px;width:380px;box-shadow:0 20px 60px rgba(0,0,0,.25);animation:slideUp .4s ease;}
.login-logo{display:flex;justify-content:center;margin-bottom:28px;}
.login-logo img{height:52px;width:auto;}
.login-title{font-size:18px;font-weight:800;color:var(--blue);text-align:center;margin-bottom:6px;}
.login-sub{font-size:12px;color:var(--muted);text-align:center;margin-bottom:24px;}
.login-field{margin-bottom:14px;}
.login-field label{font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:5px;}
.login-field input{width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:"Montserrat",Arial,sans-serif;outline:none;transition:.2s;}
.login-field input:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(10,55,130,.1);}
.login-error{color:var(--red);font-size:11px;text-align:center;margin-bottom:10px;min-height:16px;}
.login-btn{width:100%;padding:11px;background:#0A3782;color:#fff;border:none;border-radius:7px;font-size:13px;font-weight:700;cursor:pointer;font-family:"Montserrat",Arial,sans-serif;transition:.15s;}
.login-btn:hover{background:#082d6a;transform:translateY(-1px);}
.login-users{margin-top:20px;padding-top:16px;border-top:1px solid var(--border);}
.login-users-title{font-size:10px;color:var(--muted);text-align:center;margin-bottom:8px;font-weight:600;text-transform:uppercase;}
.login-user-chip{display:inline-flex;align-items:center;gap:6px;background:var(--bg);border:1px solid var(--border);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:600;cursor:pointer;margin:3px;transition:.15s;}
.login-user-chip:hover{background:var(--blue);color:#fff;border-color:var(--blue);}

/* ── NAV ── */
.nav{background:#0A3782;display:flex;align-items:center;padding:0 20px;height:50px;position:sticky;top:0;z-index:200;box-shadow:0 1px 3px rgba(0,0,0,.15);}
.nav-logo{height:36px;width:auto;margin-right:16px;}
.nav-tab{padding:0 15px;height:54px;display:flex;align-items:center;font-size:11px;font-weight:700;color:rgba(255,255,255,.6);cursor:pointer;border-bottom:3px solid transparent;letter-spacing:.04em;white-space:nowrap;transition:.15s;gap:5px;}
.nav-tab:hover{color:#fff;}
.nav-tab.active{color:#fff;border-bottom-color:var(--gold);}
.nav-badge{background:var(--gold);color:var(--blue);font-size:10px;font-weight:800;border-radius:10px;padding:1px 6px;}
.nav-spacer{flex:1;}
.nav-user{display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.8);font-size:11px;font-weight:600;}
.nav-avatar{width:30px;height:30px;border-radius:50%;background:var(--gold);color:var(--blue);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;}
.nav-logout{background:rgba(255,255,255,.15);border:none;color:#fff;padding:5px 10px;border-radius:6px;font-size:10px;font-weight:700;cursor:pointer;font-family:"Montserrat",Arial,sans-serif;}

/* ── MAIN ── */
.main{max-width:1400px;margin:0 auto;padding:20px;}

/* ── CARDS ── */
.card{background:var(--card);border:1px solid #e8eaed;border-radius:10px;padding:14px 16px;margin-bottom:10px;animation:fadeIn .3s ease;}
.card-title{font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;}
label{font-size:11px;color:#555;display:block;margin-bottom:2px;margin-top:6px;}
label:first-of-type{margin-top:0;}
input[type=text],input[type=number],input[type=date],input[type=password],select,textarea{width:100%;font-size:12px;padding:6px 9px;border-radius:7px;border:1.5px solid var(--border);background:#fafbfc;color:var(--text);outline:none;font-family:"Montserrat",Arial,sans-serif;transition:.15s;}
input:focus,select:focus,textarea:focus{border-color:var(--blue);box-shadow:0 0 0 2px rgba(10,55,130,.1);}
textarea{resize:vertical;min-height:40px;}
.r2{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.r3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}
.type-tabs{display:grid;grid-template-columns:1fr 1fr;gap:5px;}
.tt{padding:6px 4px;font-size:10px;font-weight:600;border-radius:7px;border:1.5px solid var(--border);background:#fafbfc;cursor:pointer;color:#555;text-align:center;line-height:1.3;transition:.15s;}
.tt:hover{border-color:var(--blue);color:var(--blue);}
.tt.active{background:var(--blue);color:#fff;border-color:var(--blue);}
.upa{border:2px dashed var(--border);border-radius:8px;padding:10px;text-align:center;cursor:pointer;background:#fafbfc;position:relative;min-height:58px;display:flex;align-items:center;justify-content:center;transition:.15s;}
.upa:hover{border-color:var(--blue);background:#f0f4fb;}
.upa input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}
.upa img{max-height:52px;max-width:100%;object-fit:contain;}
.upa-hint{font-size:10px;color:#aaa;}

/* ── BUTTONS ── */
.btn{padding:7px 14px;font-size:11px;font-weight:700;border-radius:8px;border:none;cursor:pointer;font-family:"Montserrat",Arial,sans-serif;transition:.15s;display:inline-flex;align-items:center;gap:5px;justify-content:center;white-space:nowrap;}
.btn:hover{opacity:.92;}

.btn-primary{background:var(--blue);color:#fff;}
.btn-success{background:var(--green);color:#fff;}
.btn-warning{background:#e8f0fb;color:var(--blue);border:1.5px solid #c5d5f0;}
.btn-danger{background:var(--red);color:#fff;}
.btn-purple{background:var(--purple);color:#fff;}
.btn-outline{background:#fff;color:var(--blue);border:1.5px solid var(--blue);}
.btn-full{width:100%;}
.btn-sm{padding:4px 10px;font-size:10px;}
.btn-row{display:flex;gap:8px;}

/* ── ÉTIQUETTE 320×453px ── */
#label-render{width:320px;height:453px;background:#fff;font-family:"Montserrat",Arial,sans-serif;border:1px solid #ccc;overflow:hidden;display:flex;flex-direction:column;flex-shrink:0;}
.lbl-head{background:var(--blue);padding:0;line-height:0;flex-shrink:0;}
.lbl-header-img{width:100%;height:auto;display:block;}
.lbl-titlebar{background:var(--cyan);color:#fff;text-align:center;padding:5px 10px;flex-shrink:0;}
.lbl-model{font-size:12px;font-weight:800;line-height:1.2;}
.lbl-ref{font-size:7.5px;font-weight:500;opacity:.9;margin-top:1px;}
.lbl-specs{display:flex;background:#e8f0f5;flex-shrink:0;}
.lbl-spec{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:7px 4px 6px;border-right:1px solid #c5d5e0;flex:1;min-height:82px;}
.lbl-spec:last-child{border-right:none;}
.lbl-spec-img{width:34px;height:34px;object-fit:contain;flex-shrink:0;margin-bottom:6px;}
.lbl-spec-val{font-size:9px;font-weight:700;color:var(--blue);text-align:center;line-height:1.25;white-space:pre-line;}
.lbl-body{display:flex;flex:1;min-height:0;background:#fff;}
.lbl-photo{flex:1;display:flex;align-items:center;justify-content:center;padding:6px;}
.lbl-photo img{max-width:100%;max-height:100%;object-fit:contain;}
.lbl-badges{width:108px;flex-shrink:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:12px;padding:8px 6px;overflow:hidden;}
.lbl-badge{display:flex;align-items:center;gap:6px;font-size:8px;font-weight:600;color:#767A7A;line-height:1.3;width:100%;}
.lbl-badge span{word-break:break-word;min-width:0;}
.lbl-badge img{width:28px;height:28px;object-fit:contain;mix-blend-mode:multiply;flex-shrink:0;}
.lbl-price-section{flex-shrink:0;padding:4px 10px 3px;background:#fff;}
.lbl-price-wrap{position:relative;display:inline-block;}
.lbl-price-box{display:flex;flex-direction:column;align-items:center;padding:4px 52px 4px 12px;border:2.5px solid var(--blue);border-radius:4px;}
.lbl-price-eur{display:flex;align-items:flex-start;}
.lbl-price-int{font-size:38px;font-weight:900;color:var(--blue);line-height:1;}
.lbl-price-sym{font-size:20px;font-weight:900;color:var(--blue);margin-top:4px;}
.lbl-price-dec{font-size:16px;font-weight:900;color:var(--blue);margin-top:4px;}
.lbl-price-cv{font-size:6.5px;color:#555;margin-top:2px;font-weight:500;text-align:center;}
.lbl-garantie-img{width:46px;height:auto;position:absolute;top:-10px;right:-10px;}
.lbl-footer{flex-shrink:0;background:#fff;padding:4px 10px;border-top:1px solid #e0e0e0;}
.lbl-footer-main{display:flex;align-items:flex-start;gap:8px;}
.lbl-legal{font-size:4.5px;color:#444;line-height:1.5;flex:1;}
.lbl-legal strong{font-weight:700;}
.lbl-barcode-col{display:flex;flex-direction:column;align-items:center;gap:2px;flex-shrink:0;margin-left:auto;}
.lbl-cv-text{font-size:6px;color:#333;font-family:monospace;text-align:center;}
.lbl-win{font-size:6px;font-weight:800;color:var(--blue);letter-spacing:.03em;margin-top:3px;}

/* ── PARC ── */
.parc-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:10px;animation:fadeIn .3s ease;}
.parc-title{font-size:20px;font-weight:900;color:var(--blue);}
.parc-stats{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;}
.stat-card{background:#fff;border:1px solid #e8eaed;border-radius:8px;padding:10px 16px;display:flex;align-items:center;gap:10px;}
.stat-num{font-size:22px;font-weight:900;color:var(--blue);}
.stat-label{font-size:10px;color:var(--muted);font-weight:600;}
.filter-bar{display:flex;gap:6px;flex-wrap:wrap;align-items:center;}
.filter-btn{padding:5px 13px;font-size:10px;font-weight:600;border-radius:20px;border:1.5px solid var(--border);background:#fff;cursor:pointer;color:#555;transition:.15s;}
.filter-btn:hover,.filter-btn.active{background:var(--blue);color:#fff;border-color:var(--blue);}
.filter-btn.f-vente.active{background:var(--green);border-color:var(--green);}
.filter-btn.f-atelier.active{background:var(--orange);border-color:var(--orange);}
.filter-btn.f-reserve.active{background:var(--purple);border-color:var(--purple);}
.filter-btn.f-vendu.active{background:var(--red);border-color:var(--red);}
.pc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:16px;}
.pc-card{background:#fff;border:1px solid #e8eaed;border-radius:10px;overflow:hidden;transition:.2s;animation:slideUp .3s ease;}
.pc-card:hover{box-shadow:0 8px 24px rgba(10,55,130,.12);transform:translateY(-2px);}
.pc-card-head{background:#0A3782;padding:10px 13px;display:flex;align-items:flex-start;justify-content:space-between;gap:8px;}
.pc-card-model{font-size:11px;font-weight:800;color:#fff;line-height:1.3;}
.pc-card-ref{font-size:8px;color:rgba(255,255,255,.65);margin-top:2px;font-family:monospace;}
.pc-status-badge{padding:3px 9px;border-radius:10px;font-size:9px;font-weight:700;flex-shrink:0;white-space:nowrap;}
.s-vente{background:#dcfce7;color:var(--green);}
.s-atelier{background:#fef3c7;color:var(--orange);}
.s-reserve{background:#ede9fe;color:var(--purple);}
.s-vendu{background:#fee2e2;color:var(--red);}
.s-amv{background:#fef9c3;color:#854d0e;}
.pc-card-body{padding:11px 13px;}
.pc-specs-row{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;}
.pc-spec-tag{background:#e8f0f5;color:var(--blue);font-size:9px;font-weight:600;padding:2px 7px;border-radius:4px;}
.pc-price-row{display:flex;align-items:baseline;gap:8px;margin-bottom:4px;}
.pc-price{font-size:22px;font-weight:900;color:var(--blue);}
.pc-price-cents{font-size:13px;font-weight:700;color:var(--blue);}
.pc-cv{font-size:9px;color:#aaa;font-family:monospace;}
.pc-margin-box{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:6px 10px;margin-top:6px;display:flex;gap:12px;flex-wrap:wrap;}
.pc-margin-item{font-size:9px;color:#155e2d;font-weight:600;}
.pc-margin-val{font-size:11px;font-weight:800;color:var(--green);}
.pc-margin-neg{color:var(--red);}
.pc-card-docs{padding:8px 13px;border-top:1px solid #f0f0f0;}
.pc-docs-title{font-size:9px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin-bottom:5px;display:flex;align-items:center;justify-content:space-between;}
.pc-docs-grid{display:flex;gap:5px;flex-wrap:wrap;}
.doc-thumb{width:44px;height:44px;border-radius:6px;object-fit:cover;border:1px solid var(--border);cursor:pointer;transition:.15s;}
.doc-thumb:hover{transform:scale(1.05);}
.doc-pdf{width:44px;height:44px;border-radius:6px;background:#fee2e2;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:var(--red);cursor:pointer;border:1px solid #fecaca;}
.pc-card-footer{padding:9px 13px;border-top:1px solid #f0f0f0;display:flex;gap:5px;flex-wrap:wrap;}

/* ── DIAG ── */
.diag-section{background:#fff;border:1px solid #e8eaed;border-radius:10px;padding:14px 16px;margin-bottom:10px;animation:fadeIn .3s ease;}
.diag-section-title{font-size:12px;font-weight:800;color:var(--blue);margin-bottom:12px;padding-bottom:6px;border-bottom:2px solid #e8f0f5;display:flex;align-items:center;gap:6px;}
.diag-table{width:100%;border-collapse:collapse;}
.diag-table td{padding:5px 8px;border:1px solid var(--border);font-size:11px;}
.diag-table td:first-child{background:#f0f4f8;font-weight:600;color:var(--blue);width:130px;}
.diag-table input{border:none;background:transparent;width:100%;font-size:11px;font-family:"Montserrat",Arial,sans-serif;outline:none;}
.cb-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px;}
.cb-item{display:flex;align-items:center;gap:6px;font-size:11px;color:#444;padding:3px 0;cursor:pointer;transition:.1s;}
.cb-item:hover{color:var(--blue);}
.cb-item input[type=checkbox]{width:14px;height:14px;accent-color:var(--blue);cursor:pointer;}
.verdict-btns{display:flex;gap:8px;margin-top:8px;}
.verdict-btn{flex:1;padding:9px;border-radius:8px;border:2px solid;font-size:11px;font-weight:700;cursor:pointer;font-family:"Montserrat",Arial,sans-serif;transition:.15s;}
.verdict-btn.ok{border-color:#86efac;color:#15803d;background:#f0fdf4;}
.verdict-btn.ok.active,.verdict-btn.ok:hover{background:var(--green);color:#fff;}
.verdict-btn.ko{border-color:#fca5a5;color:#b91c1c;background:#fef2f2;}
.verdict-btn.ko.active,.verdict-btn.ko:hover{background:var(--red);color:#fff;}
.verdict-btn.reserve{border-color:#c4b5fd;color:#6d28d9;background:#f5f3ff;}
.verdict-btn.reserve.active,.verdict-btn.reserve:hover{background:var(--purple);color:#fff;}

/* ── PRICE CALC ── */
.price-calc{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 14px;margin-top:8px;}
.price-calc-title{font-size:10px;font-weight:700;color:var(--blue);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;}
.price-calc-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;}
.price-calc-item{text-align:center;}
.price-calc-label{font-size:9px;color:var(--muted);font-weight:600;margin-bottom:2px;}
.price-calc-val{font-size:14px;font-weight:900;color:var(--blue);}
.price-calc-val.green{color:var(--green);}
.price-calc-val.red{color:var(--red);}

/* ── MODALS ── */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(3px);}
.modal{background:#fff;border-radius:16px;padding:24px;width:100%;max-height:90vh;overflow-y:auto;animation:slideUp .25s ease;}
.modal-sm{max-width:380px;}
.modal-md{max-width:580px;}
.modal-lg{max-width:820px;}
.modal-title{font-size:16px;font-weight:800;color:var(--blue);margin-bottom:16px;display:flex;align-items:center;gap:8px;}
.modal-footer{display:flex;gap:8px;justify-content:flex-end;margin-top:18px;padding-top:14px;border-top:1px solid var(--border);}

/* ── QR ── */
.qr-container{display:flex;flex-direction:column;align-items:center;gap:12px;}
.qr-hint{font-size:11px;color:#666;text-align:center;line-height:1.6;}

/* ── DIAG VIEW ── */
.diag-view{background:#fff;border:1px solid var(--border);border-radius:12px;padding:16px;margin-top:12px;}
.diag-view-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}
.diag-view-section{margin-bottom:10px;}
.diag-view-section-title{font-size:11px;font-weight:700;color:var(--blue);background:#e8f0f5;padding:5px 10px;border-radius:6px;margin-bottom:6px;}
.diag-check-row{display:flex;flex-wrap:wrap;gap:6px;}
.diag-check-tag{font-size:10px;padding:3px 8px;border-radius:12px;font-weight:600;}
.diag-check-ok{background:#dcfce7;color:var(--green);}
.diag-check-ko{background:#fee2e2;color:var(--red);opacity:.5;}

/* ── LIGHTBOX ── */
.lightbox{position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:2000;display:flex;align-items:center;justify-content:center;animation:fadeIn .2s;}
.lightbox img{max-width:92vw;max-height:92vh;border-radius:8px;}
.lightbox-close{position:absolute;top:18px;right:22px;color:#fff;font-size:30px;cursor:pointer;font-weight:700;line-height:1;}

/* ── TOAST ── */
.toast{position:fixed;bottom:24px;right:24px;background:var(--blue);color:#fff;padding:11px 20px;border-radius:10px;font-size:12px;font-weight:600;z-index:9999;transform:translateY(80px);opacity:0;transition:.3s;max-width:320px;box-shadow:0 8px 24px rgba(0,0,0,.2);}
.toast.show{transform:translateY(0);opacity:1;}

/* ── EMPTY ── */
.empty-state{text-align:center;padding:50px 20px;color:#ccc;grid-column:1/-1;}
.empty-icon{font-size:48px;margin-bottom:12px;}



/* Diagnostic attachments */
.cb-row{display:flex;align-items:center;gap:6px;padding:3px 0;}
.cb-label{display:flex;align-items:center;gap:6px;font-size:11px;color:#444;cursor:pointer;flex:1;}
.cb-attach-btn{width:22px;height:22px;border-radius:5px;border:1px solid #e0e4ee;background:#f8fafc;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;transition:.15s;position:relative;}
.cb-attach-btn:hover{border-color:#0A3782;background:#f0f4fb;}
.cb-attach-btn input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%;}
.cb-attach-count{background:#0A3782;color:#fff;font-size:8px;font-weight:700;border-radius:8px;padding:1px 4px;margin-left:2px;display:none;}
.cb-attach-count.has-files{display:inline;}

/* Tooltips */
[title]{position:relative;cursor:pointer;}
.btn[title]:hover::after{content:attr(title);position:absolute;bottom:calc(100% + 6px);left:50%;transform:translateX(-50%);background:#1a1a2e;color:#fff;font-size:10px;font-weight:600;padding:4px 8px;border-radius:5px;white-space:nowrap;pointer-events:none;z-index:9999;font-family:"Montserrat",Arial,sans-serif;}
.btn[title]:hover::before{content:'';position:absolute;bottom:calc(100% + 2px);left:50%;transform:translateX(-50%);border:4px solid transparent;border-top-color:#1a1a2e;pointer-events:none;z-index:9999;}

/* ── ANIMATIONS ── */
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes slideUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
@keyframes pulse{0%,100%{transform:scale(1);}50%{transform:scale(1.05);}}

.stat-card:hover{box-shadow:0 4px 12px rgba(10,55,130,.1);}
`;
const BODY_HTML = `

<!-- ══ LOGIN PAGE ══ -->
<div id="login-page">
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo"><img src="data:image/png;base64,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" alt="LDLC"></div>
      <div class="login-title">Gestion Reconditionnés</div>
      <div class="login-sub">Nice Grimaldi</div>
      <div class="login-error" id="login-error"></div>
      <div class="login-field">
        <label>Identifiant</label>
        <input type="text" id="login-user" placeholder="technicien1" onkeydown="if(event.key==='Enter')doLogin()">
      </div>
      <div class="login-field">
        <label>Mot de passe</label>
        <input type="password" id="login-pass" placeholder="••••••" onkeydown="if(event.key==='Enter')doLogin()">
      </div>
      <button class="login-btn" onclick="doLogin()">Se connecter</button>
      <div class="login-users">
        <div class="login-users-title">Connexion rapide</div>
        <div id="login-users-list"></div>
      </div>
    </div>
  </div>
</div>

<!-- ══ APP ══ -->
<div id="app" style="display:none;">

<nav class="nav">
  <img src="data:image/png;base64,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" class="nav-logo" alt="LDLC">
  <div class="nav-tab active" onclick="showTab('diag')" id="tab-diag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" style="vertical-align:-3px;margin-right:5px;"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>Diagnostic</div>
  <div class="nav-tab" onclick="showTab('gen')" id="tab-gen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" style="vertical-align:-3px;margin-right:5px;"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/></svg>Étiquette</div>
  <div class="nav-tab" onclick="showTab('parc')" id="tab-parc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" style="vertical-align:-3px;margin-right:5px;"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Parc <span class="nav-badge" id="parc-count">0</span></div>
  <div class="nav-spacer"></div>
  <div class="nav-user">
    <div class="nav-avatar" id="nav-avatar">?</div>
    <span id="nav-username"></span>
    <button class="nav-logout" onclick="doLogout()">Déconnexion</button>
  </div>
</nav>

<div class="main">

<!-- ══ DIAGNOSTIC ══ -->
<div id="page-diag">
  <div style="max-width:720px;">

    <div class="diag-section">
      <div class="diag-section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Infos PC</div>
      <table class="diag-table">
        <tr><td>Modèle</td><td><input type="text" id="d-model" placeholder="PC HP ProBook G7"></td></tr>
        <tr><td>Référence</td><td><input type="text" id="d-ref" placeholder="NCNRCX03K339503"></td></tr>
        <tr><td>CPU</td><td><input type="text" id="d-cpu" placeholder="Intel Core I5-10210U"></td></tr>
        <tr><td>RAM</td><td><input type="text" id="d-ram" placeholder="DDR4 16 Go"></td></tr>
        <tr><td>SSD</td><td><input type="text" id="d-ssd" placeholder="SSD 512 Go"></td></tr>
        <tr><td>GPU</td><td><input type="text" id="d-gpu" placeholder="Optionnel"></td></tr>
        <tr><td>Écran</td><td><input type="text" id="d-screen" placeholder='Écran 15"'></td></tr>
        <tr><td>OS</td><td>
          <select id="d-os">
            <option value="WINDOWS 11 INSTALLÉ">Windows 11</option>
            <option value="WINDOWS 10 INSTALLÉ">Windows 10</option>
            <option value="WINDOWS 8.1 INSTALLÉ">Windows 8.1</option>
            <option value="macOS Sequoia installé">macOS Sequoia</option>
            <option value="macOS Sonoma installé">macOS Sonoma</option>
            <option value="macOS Ventura installé">macOS Ventura</option>
            <option value="Aucun OS installé">Sans OS</option>
          </select>
        </td></tr>
        <tr><td>Technicien</td><td><input type="text" id="d-tech" placeholder="Initiales"></td></tr>
        <tr><td>Date</td><td><input type="date" id="d-date"></td></tr>
      </table>
    </div>

    <div class="diag-section">
      <div class="diag-section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9h4.5a1.5 1.5 0 010 3H10.5a1.5 1.5 0 000 3H15"/></svg>Prix</div>
      <div class="r2">
        <div>
          <label>Prix d'achat HT (€)</label>
          <input type="number" id="d-prix-achat" placeholder="150" step="0.01" oninput="calcPrices()">
        </div>
        <div>
          <label>Prix de vente TTC (€)</label>
          <input type="number" id="d-price" placeholder="699" oninput="calcPrices()">
        </div>
      </div>
      <div class="price-calc" id="price-calc-box" style="display:none;">
        <div class="price-calc-title">💹 Calcul automatique</div>
        <div class="price-calc-grid">
          <div class="price-calc-item">
            <div class="price-calc-label">Achat HT</div>
            <div class="price-calc-val" id="calc-achat">—</div>
          </div>
          <div class="price-calc-item">
            <div class="price-calc-label">Vente HT</div>
            <div class="price-calc-val" id="calc-vente-ht">—</div>
          </div>
          <div class="price-calc-item">
            <div class="price-calc-label">Marge HT</div>
            <div class="price-calc-val" id="calc-marge">—</div>
          </div>
        </div>
      </div>
    </div>

    <div class="diag-section">
      <div class="diag-section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>Diag Hardware</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-memtest" style="width:14px;height:14px;accent-color:#0A3782;"> Memtest</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-memtest">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-memtest', this)">
          </div>
          <span class="cb-attach-count" id="count-d-memtest">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-smart" style="width:14px;height:14px;accent-color:#0A3782;"> S.M.A.R.T Life</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-smart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-smart', this)">
          </div>
          <span class="cb-attach-count" id="count-d-smart">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-screenshot" style="width:14px;height:14px;accent-color:#0A3782;"> Copie d'écran</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-screenshot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-screenshot', this)">
          </div>
          <span class="cb-attach-count" id="count-d-screenshot">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-firmware" style="width:14px;height:14px;accent-color:#0A3782;"> Firmware</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-firmware">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-firmware', this)">
          </div>
          <span class="cb-attach-count" id="count-d-firmware">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-bios" style="width:14px;height:14px;accent-color:#0A3782;"> Bios version</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-bios">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-bios', this)">
          </div>
          <span class="cb-attach-count" id="count-d-bios">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-pile" style="width:14px;height:14px;accent-color:#0A3782;"> Pile Bios</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-pile">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-pile', this)">
          </div>
          <span class="cb-attach-count" id="count-d-pile">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-depoussierage" style="width:14px;height:14px;accent-color:#0A3782;"> Dépoussiérage</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-depoussierage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-depoussierage', this)">
          </div>
          <span class="cb-attach-count" id="count-d-depoussierage">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-thermique" style="width:14px;height:14px;accent-color:#0A3782;"> Entretien thermique</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-thermique">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-thermique', this)">
          </div>
          <span class="cb-attach-count" id="count-d-thermique">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-temp" style="width:14px;height:14px;accent-color:#0A3782;"> Température CPU/GPU</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-temp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-temp', this)">
          </div>
          <span class="cb-attach-count" id="count-d-temp">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-batterie" style="width:14px;height:14px;accent-color:#0A3782;"> Batterie testée</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-batterie">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-batterie', this)">
          </div>
          <span class="cb-attach-count" id="count-d-batterie">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-plasturgie" style="width:14px;height:14px;accent-color:#0A3782;"> État plasturgie</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-plasturgie">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-plasturgie', this)">
          </div>
          <span class="cb-attach-count" id="count-d-plasturgie">0</span>
        </div>
      </div>
      <div style="margin-top:8px;" class="r2">
        <div>
          <label>Niveau batterie (%)</label>
          <input type="text" id="d-batterie-niveau" placeholder="Ex: 87% — 45 Wh">
        </div>
        <div>
          <label>Temp. CPU / GPU (°C)</label>
          <input type="text" id="d-temp-val" placeholder="Ex: 45°C / 52°C">
        </div>
      </div>
      <div style="margin-top:6px;" class="r2">
        <div>
          <label>Version Bios</label>
          <input type="text" id="d-bios-ver" placeholder="Ex: F.20">
        </div>
        <div>
          <label>Firmware version</label>
          <input type="text" id="d-firmware-ver" placeholder="Ex: 1.2.3">
        </div>
      </div>
      <div style="margin-top:6px;">
        <label>État plasturgie / boîtier</label>
        <input type="text" id="d-plasturgie-etat" placeholder="Ex: Très bon état, légères traces d'usage">
      </div>
      <div style="margin-top:6px;"><label>Observations hardware</label><textarea id="d-obs-hw" rows="2" placeholder="Remarques supplémentaires..."></textarea></div>
    </div>

    <div class="diag-section">
      <div class="diag-section-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>Diag Système</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:8px;">
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-1ere" style="width:14px;height:14px;accent-color:#0A3782;"> 1ère mise en service</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-1ere">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-1ere', this)">
          </div>
          <span class="cb-attach-count" id="count-d-1ere">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-demarrage" style="width:14px;height:14px;accent-color:#0A3782;"> Démarrage rapide désactivé</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-demarrage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-demarrage', this)">
          </div>
          <span class="cb-attach-count" id="count-d-demarrage">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-pilotes" style="width:14px;height:14px;accent-color:#0A3782;"> Vérification pilotes</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-pilotes">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-pilotes', this)">
          </div>
          <span class="cb-attach-count" id="count-d-pilotes">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-alim" style="width:14px;height:14px;accent-color:#0A3782;"> Vérif. alimentation</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-alim">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-alim', this)">
          </div>
          <span class="cb-attach-count" id="count-d-alim">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-antivirus" style="width:14px;height:14px;accent-color:#0A3782;"> Antivirus et Firewall</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-antivirus">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-antivirus', this)">
          </div>
          <span class="cb-attach-count" id="count-d-antivirus">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-logiciels" style="width:14px;height:14px;accent-color:#0A3782;"> Logiciels installés</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-logiciels">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-logiciels', this)">
          </div>
          <span class="cb-attach-count" id="count-d-logiciels">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-nettoyage" style="width:14px;height:14px;accent-color:#0A3782;"> Nettoyage disque</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-nettoyage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-nettoyage', this)">
          </div>
          <span class="cb-attach-count" id="count-d-nettoyage">0</span>
        </div>
        <div class="cb-row">
          <label class="cb-label"><input type="checkbox" id="d-activation" style="width:14px;height:14px;accent-color:#0A3782;"> Activation Windows</label>
          <div class="cb-attach-btn" title="Joindre un fichier" id="btn-attach-d-activation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
            <input type="file" accept="image/*,.pdf,.doc,.docx" multiple onchange="addDiagAttachment('d-activation', this)">
          </div>
          <span class="cb-attach-count" id="count-d-activation">0</span>
        </div>
      </div>
      <div style="margin-top:8px;">
        <div style="font-size:10px;font-weight:700;color:#0A3782;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Logiciels installés</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:6px;background:#f8fafc;border:1px solid #e8eaed;border-radius:7px;padding:8px;">
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;"><input type="checkbox" id="d-log-firefox" style="accent-color:#0A3782;"> Firefox</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;"><input type="checkbox" id="d-log-chrome" style="accent-color:#0A3782;"> Chrome</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;"><input type="checkbox" id="d-log-vlc" style="accent-color:#0A3782;"> VLC</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;"><input type="checkbox" id="d-log-7zip" style="accent-color:#0A3782;"> 7-Zip</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;"><input type="checkbox" id="d-log-libre" style="accent-color:#0A3782;"> LibreOffice</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;"><input type="checkbox" id="d-log-acrobat" style="accent-color:#0A3782;"> Adobe Reader</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;"><input type="checkbox" id="d-log-office" style="accent-color:#0A3782;"> Microsoft Office</label>
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;"><input type="checkbox" id="d-log-thunderbird" style="accent-color:#0A3782;"> Thunderbird</label>
        </div>
        <input type="text" id="d-logiciels-list" placeholder="Autres logiciels..." style="font-size:11px;">
      </div>
      <div style="margin-top:6px;"><label>Observations système</label><textarea id="d-obs-sys" rows="2" placeholder="Remarques..."></textarea></div>
    </div>

    <div class="diag-section">
      <div class="diag-section-title"><svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><polyline points="20 6 9 17 4 12"/></svg>Verdict final</div>
      <div class="verdict-btns">
        <button class="verdict-btn ok" id="v-ok" onclick="setVerdict('vente','ok')">Terminé — En vente</button>
        <button class="verdict-btn ko" id="v-ko" onclick="setVerdict('atelier','ko')">Problème — Atelier</button>
        <button class="verdict-btn reserve" id="v-reserve" onclick="setVerdict('reserve','reserve')">Réservée</button>
      </div>
    </div>

    <div class="diag-section">
      <div class="diag-section-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
        Code article LDLC
      </div>
      <div style="background:#f8fafc;border:1px solid var(--border);border-radius:8px;padding:10px 12px;font-size:11px;color:#333;line-height:1.6;font-family:monospace;position:relative;" id="code-article-box">
        <div id="code-article-text" style="word-break:break-all;">Remplis les champs ci-dessus pour générer le code article...</div>
        <button onclick="copyCodeArticle()" style="position:absolute;top:8px;right:8px;background:var(--blue);color:#fff;border:none;border-radius:5px;padding:3px 8px;font-size:10px;font-weight:700;cursor:pointer;font-family:Montserrat,Arial,sans-serif;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11" style="vertical-align:-2px;margin-right:3px;"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
          Copier
        </button>
      </div>
      <div id="code-article-copied" style="font-size:10px;color:var(--green);font-weight:600;margin-top:4px;min-height:14px;"></div>
    </div>

    
    <div class="btn-row">
      <button class="btn btn-outline btn-full" onclick="printDiag()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="vertical-align:-2px;margin-right:4px;"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>Imprimer diagnostic</button>
      <button class="btn btn-success btn-full" onclick="saveDiagToParc()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14" style="vertical-align:-2px;margin-right:4px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Créer le PC</button>
    </div>
  </div>
</div>

<!-- ══ ÉTIQUETTE ══ -->
<div id="page-gen" style="display:none;">
  <div style="display:flex;gap:20px;">
    <div style="flex:0 0 290px;display:flex;flex-direction:column;gap:10px;">
      <div class="card">
        <div class="card-title">Type de produit</div>
        <div class="type-tabs">
          <div class="tt active" onclick="setType('laptop_no_gpu',this)">Portable<br>sans GPU</div>
          <div class="tt" onclick="setType('laptop_gpu',this)">Portable<br>avec GPU</div>
          <div class="tt" onclick="setType('tour_gpu',this)">Tour<br>avec GPU</div>
          <div class="tt" onclick="setType('tour_no_gpu',this)">Tour<br>sans GPU</div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">Produit</div>
        <label>Modèle</label><input type="text" id="f-model" oninput="upd()">
        <label>Référence</label><input type="text" id="f-ref" oninput="upd()">
        <label>N° série / CV</label><input type="text" id="f-serial" oninput="upd()">
      </div>
      <div class="card">
        <div class="card-title">Specs (Entrée = nouvelle ligne)</div>
        <div class="r2">
          <div><label>CPU</label><input type="text" id="f-cpu" oninput="upd()"></div>
          <div><label>RAM</label><input type="text" id="f-ram" oninput="upd()"></div>
        </div>
        <div class="r2" style="margin-top:5px;">
          <div><label>Stockage</label><input type="text" id="f-ssd" oninput="upd()"></div>
          <div id="spec4-wrap"><label id="spec4-lbl">Écran</label><input type="text" id="f-spec4" oninput="upd()"></div>
        </div>
        <div id="gpu-wrap" style="display:none;margin-top:5px;">
          <label>GPU</label><input type="text" id="f-gpu" oninput="upd()">
        </div>
      </div>
      <div class="card">
        <div class="card-title">Prix TTC (entier €)</div>
        <input type="number" id="f-price" oninput="upd()">
      </div>
      <div class="card">
        <div class="card-title">OS</div>
        <select id="f-os" onchange="upd()">
          <option value="WINDOWS 11 INSTALLÉ">Windows 11</option>
          <option value="WINDOWS 10 INSTALLÉ">Windows 10</option>
          <option value="WINDOWS 8.1 INSTALLÉ">Windows 8.1</option>
          <option value="WINDOWS 7 INSTALLÉ">Windows 7</option>
          <option value="macOS Sequoia installé">macOS Sequoia</option>
          <option value="macOS Sonoma installé">macOS Sonoma</option>
          <option value="macOS Ventura installé">macOS Ventura</option>
          <option value="Aucun OS installé">Sans OS</option>
        </select>
      </div>
      <div class="card">
        <div class="card-title">Photo</div>
        <div class="upa"><input type="file" accept="image/*" onchange="loadImg(this)"><div id="img-prev"><span class="upa-hint">Cliquer pour uploader</span></div></div>
      </div>
      <div class="card">
        <div class="card-title">Statut</div>
        <select id="f-status">
          <option value="vente">En vente</option>
          <option value="amv">À mettre en vente</option>
          <option value="atelier">À l'atelier</option>
          <option value="reserve">Réservé</option>
          <option value="vendu">Vendu</option>
        </select>
      </div>
      <div class="btn-row">
        <button class="btn btn-outline btn-full" onclick="exportPNG()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>PNG</button>
        <button class="btn btn-primary btn-full" onclick="printLabel()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>Imprimer</button>
      </div>
      <button class="btn btn-success btn-full" onclick="saveToParc()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Ajouter au parc</button>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:10px;">
      <div style="font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;">Aperçu A6</div>
      <div id="label-render"><div style="width:320px;height:453px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px;background:#fff;border-radius:8px;border:2px dashed #dde2ec;">Remplis le formulaire</div></div>
    </div>
  </div>
</div>

<!-- ══ PARC ══ -->
<div id="page-parc" style="display:none;">
  <div class="parc-header">
    <div class="parc-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" style="vertical-align:-4px;margin-right:8px;"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Parc reconditionnés</div>
    <div class="filter-bar">
      <div class="filter-btn active" onclick="setFilter('all',this)">Tous</div>
      <div class="filter-btn f-vente" onclick="setFilter('vente',this)">En vente</div>
      <div class="filter-btn f-atelier" onclick="setFilter('atelier',this)">Atelier</div>
      <div class="filter-btn f-reserve" onclick="setFilter('reserve',this)">Réservé</div>
      <div class="filter-btn f-vendu" onclick="setFilter('vendu',this)">Vendu</div>
    </div>
  </div>
  <div class="parc-stats" id="parc-stats"></div>
  <div class="pc-grid" id="parc-grid"></div>
</div>

</div><!-- /main -->
</div><!-- /app -->

<!-- MODAL EDIT -->
<div class="modal-overlay" id="edit-modal" style="display:none;">
  <div class="modal modal-lg">
    <div class="modal-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Modifier le PC</div>
    <input type="hidden" id="edit-id">
    <div class="r2">
      <div>
        <div class="card-title" style="margin-bottom:8px;">Informations</div>
        <label>Modèle</label><input type="text" id="edit-model">
        <label>Référence</label><input type="text" id="edit-ref">
        <label>N° série / CV</label><input type="text" id="edit-serial">
        <label>Prix TTC (€)</label><input type="number" id="edit-price" oninput="calcEditPrices()">
        <label>Prix achat HT (€)</label><input type="number" id="edit-prix-achat" step="0.01" oninput="calcEditPrices()">
        <div class="price-calc" id="edit-price-calc" style="display:none;margin-top:8px;">
          <div class="price-calc-title">💹 Calcul</div>
          <div class="price-calc-grid">
            <div class="price-calc-item"><div class="price-calc-label">Achat HT</div><div class="price-calc-val" id="edit-calc-achat">—</div></div>
            <div class="price-calc-item"><div class="price-calc-label">Vente HT</div><div class="price-calc-val" id="edit-calc-vente">—</div></div>
            <div class="price-calc-item"><div class="price-calc-label">Marge HT</div><div class="price-calc-val" id="edit-calc-marge">—</div></div>
          </div>
        </div>
        <label>Statut</label>
        <select id="edit-status">
          <option value="vente">En vente</option>
          <option value="amv">À mettre en vente</option>
          <option value="atelier">À l'atelier</option>
          <option value="reserve">Réservé</option>
          <option value="vendu">Vendu</option>
        </select>
        <label>OS</label>
        <select id="edit-os">
          <option value="WINDOWS 11 INSTALLÉ">Windows 11</option>
          <option value="WINDOWS 10 INSTALLÉ">Windows 10</option>
          <option value="WINDOWS 8.1 INSTALLÉ">Windows 8.1</option>
          <option value="WINDOWS 7 INSTALLÉ">Windows 7</option>
          <option value="macOS Sequoia installé">macOS Sequoia</option>
          <option value="macOS Sonoma installé">macOS Sonoma</option>
          <option value="macOS Ventura installé">macOS Ventura</option>
          <option value="Aucun OS installé">Sans OS</option>
        </select>
        <label>Notes</label>
        <textarea id="edit-notes" rows="2"></textarea>
      </div>
      <div>
        <div class="card-title" style="margin-bottom:8px;">Specs techniques</div>
        <label>CPU</label><input type="text" id="edit-cpu">
        <label>RAM</label><input type="text" id="edit-ram">
        <label>Stockage</label><input type="text" id="edit-ssd">
        <label>Écran</label><input type="text" id="edit-screen">
        <label>GPU</label><input type="text" id="edit-gpu">
        <div class="card-title" style="margin-top:12px;margin-bottom:8px;">Photo</div>
        <div class="upa"><input type="file" accept="image/*" onchange="editLoadImg(this)"><div id="edit-img-prev"><span class="upa-hint">Changer la photo</span></div></div>
        <div style="margin-top:10px;">
          <button class="btn btn-outline btn-full" onclick="viewDiagFromEdit()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg> Voir le diagnostic</button>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('edit-modal')">Annuler</button>
      <button class="btn btn-warning" onclick="editPrintLabel()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>Imprimer étiquette</button>
      <button class="btn btn-primary" onclick="saveEdit()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>Enregistrer</button>
    </div>
  </div>
</div>

<!-- MODAL DIAG VIEW -->
<div class="modal-overlay" id="diag-view-modal" style="display:none;">
  <div class="modal modal-lg">
    <div class="modal-title" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <div style="display:flex;align-items:center;gap:8px;font-size:16px;font-weight:800;color:var(--blue);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
        Diagnostic
      </div>
      <button class="btn btn-outline btn-sm" title="Modifier ce diagnostic" onclick="editDiagById()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Modifier
      </button>
    </div>
    <div id="diag-view-content"></div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('diag-view-modal')">Fermer</button>
      <button class="btn btn-primary" onclick="printDiagById()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>Imprimer</button>
      <button class="btn btn-success" onclick="exportDiagPDF()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Télécharger</button>
    </div>
  </div>
</div>

<!-- MODAL QR -->
<div class="modal-overlay" id="qr-modal" style="display:none;">
  <div class="modal modal-sm">
    <div class="modal-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"/></svg>Upload depuis mobile</div>
    <div class="qr-container">
      <div id="qr-code-div"></div>
      <div class="qr-hint">Scanne ce QR code avec ton téléphone<br>pour uploader des documents<br><small style="color:#aaa;">(même réseau WiFi requis)</small></div>
      <div id="qr-pc-name" style="font-size:12px;font-weight:700;color:var(--blue);"></div>
      <div style="width:100%;border-top:1px solid var(--border);padding-top:10px;margin-top:4px;">
        <div style="font-size:10px;color:var(--muted);text-align:center;margin-bottom:6px;font-weight:600;">Ou uploader directement</div>
        <label class="btn btn-outline btn-full" style="cursor:pointer;">
          📎 Choisir fichiers
          <input type="file" accept="image/*,.pdf" multiple style="display:none;" onchange="addDocFromInput(this)">
        </label>
      </div>
      <div class="qr-upload-list" id="qr-docs-list" style="width:100%;"></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('qr-modal')">Fermer</button>
    </div>
  </div>
</div>

<!-- MODAL EDIT DIAGNOSTIC -->
<div class="modal-overlay" id="diag-edit-modal" style="display:none;">
  <div class="modal modal-lg" style="max-width:900px;">
    <div class="modal-title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="margin-right:8px;"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      Modifier le diagnostic
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div>
        <div class="card-title">Infos PC</div>
        <label>Modèle</label><input type="text" id="de-model">
        <label>Référence</label><input type="text" id="de-ref">
        <label>N° série / CV</label><input type="text" id="de-serial">
        <div class="r2" style="margin-top:5px;">
          <div><label>CPU</label><input type="text" id="de-cpu"></div>
          <div><label>RAM</label><input type="text" id="de-ram"></div>
        </div>
        <div class="r2" style="margin-top:5px;">
          <div><label>SSD</label><input type="text" id="de-ssd"></div>
          <div><label>Écran</label><input type="text" id="de-screen"></div>
        </div>
        <div class="r2" style="margin-top:5px;">
          <div><label>GPU</label><input type="text" id="de-gpu"></div>
          <div><label>OS</label>
            <select id="de-os">
              <option value="WINDOWS 11 INSTALLÉ">Windows 11</option>
              <option value="WINDOWS 10 INSTALLÉ">Windows 10</option>
              <option value="WINDOWS 8.1 INSTALLÉ">Windows 8.1</option>
              <option value="macOS Sequoia installé">macOS Sequoia</option>
              <option value="macOS Sonoma installé">macOS Sonoma</option>
              <option value="Aucun OS installé">Sans OS</option>
            </select>
          </div>
        </div>
        <div class="r2" style="margin-top:5px;">
          <div><label>Prix TTC (€)</label><input type="number" id="de-price" oninput="calcDiagEditPrices()"></div>
          <div><label>Achat HT (€)</label><input type="number" id="de-achat" step="0.01" oninput="calcDiagEditPrices()"></div>
        </div>
        <div id="de-price-calc" class="price-calc" style="display:none;margin-top:6px;">
          <div class="price-calc-grid">
            <div class="price-calc-item"><div class="price-calc-label">Achat HT</div><div class="price-calc-val" id="de-calc-achat">—</div></div>
            <div class="price-calc-item"><div class="price-calc-label">Vente HT</div><div class="price-calc-val" id="de-calc-vente">—</div></div>
            <div class="price-calc-item"><div class="price-calc-label">Marge HT</div><div class="price-calc-val" id="de-calc-marge">—</div></div>
          </div>
        </div>
        <div class="r2" style="margin-top:5px;">
          <div><label>Technicien</label><input type="text" id="de-tech"></div>
          <div><label>Date</label><input type="date" id="de-date"></div>
        </div>
        <div style="margin-top:8px;">
          <div class="card-title" style="margin-bottom:6px;">Verdict</div>
          <div style="display:flex;gap:6px;">
            <button class="verdict-btn ok" id="de-v-ok" onclick="setDiagEditVerdict('vente','ok')" style="flex:1;padding:7px;font-size:10px;">Terminé — En vente</button>
            <button class="verdict-btn ko" id="de-v-ko" onclick="setDiagEditVerdict('atelier','ko')" style="flex:1;padding:7px;font-size:10px;">Problème — Atelier</button>
            <button class="verdict-btn reserve" id="de-v-reserve" onclick="setDiagEditVerdict('reserve','reserve')" style="flex:1;padding:7px;font-size:10px;">Réservée</button>
          </div>
        </div>
      </div>
      <div>
        <div class="card-title">Diag Hardware</div>
        <div class="cb-grid" style="margin-bottom:8px;">
          <label class="cb-item"><input type="checkbox" id="de-memtest"> Memtest</label>
          <label class="cb-item"><input type="checkbox" id="de-smart"> S.M.A.R.T</label>
          <label class="cb-item"><input type="checkbox" id="de-screenshot"> Screenshot</label>
          <label class="cb-item"><input type="checkbox" id="de-firmware"> Firmware</label>
          <label class="cb-item"><input type="checkbox" id="de-bios"> Bios version</label>
          <label class="cb-item"><input type="checkbox" id="de-pile"> Pile Bios</label>
          <label class="cb-item"><input type="checkbox" id="de-depoussierage"> Dépoussiérage</label>
          <label class="cb-item"><input type="checkbox" id="de-thermique"> Thermique</label>
          <label class="cb-item"><input type="checkbox" id="de-temp"> Température</label>
          <label class="cb-item"><input type="checkbox" id="de-batterie"> Batterie</label>
          <label class="cb-item"><input type="checkbox" id="de-plasturgie"> Plasturgie</label>
        </div>
        <div class="r2">
          <div><label>Niveau batterie</label><input type="text" id="de-batterie-niveau" placeholder="87% — 45Wh"></div>
          <div><label>Temp CPU/GPU</label><input type="text" id="de-temp-val" placeholder="45°C / 52°C"></div>
        </div>
        <div class="r2" style="margin-top:5px;">
          <div><label>Version Bios</label><input type="text" id="de-bios-ver" placeholder="F.20"></div>
          <div><label>Version Firmware</label><input type="text" id="de-firmware-ver"></div>
        </div>
        <label>État plasturgie</label><input type="text" id="de-plasturgie-etat" placeholder="Très bon état...">
        <label>Obs. hardware</label><textarea id="de-obs-hw" rows="2"></textarea>

        <div class="card-title" style="margin-top:10px;margin-bottom:6px;">Diag Système</div>
        <div class="cb-grid" style="margin-bottom:6px;">
          <label class="cb-item"><input type="checkbox" id="de-1ere"> 1ère MES</label>
          <label class="cb-item"><input type="checkbox" id="de-demarrage"> Démarrage rapide</label>
          <label class="cb-item"><input type="checkbox" id="de-pilotes"> Pilotes</label>
          <label class="cb-item"><input type="checkbox" id="de-alim"> Alimentation</label>
          <label class="cb-item"><input type="checkbox" id="de-antivirus"> Antivirus</label>
          <label class="cb-item"><input type="checkbox" id="de-logiciels-check"> Logiciels</label>
          <label class="cb-item"><input type="checkbox" id="de-nettoyage"> Nettoyage</label>
          <label class="cb-item"><input type="checkbox" id="de-activation"> Activation</label>
        </div>
        <label>Logiciels installés</label><input type="text" id="de-logiciels-list" placeholder="Firefox, VLC...">
        <label>Obs. système</label><textarea id="de-obs-sys" rows="2"></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('diag-edit-modal')">Annuler</button>
      <button class="btn btn-primary" onclick="saveDiagEdit()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Enregistrer diagnostic
      </button>
    </div>
  </div>
</div>

<!-- LIGHTBOX -->
<div class="lightbox" id="lightbox" style="display:none;" onclick="closeLightbox()">
  <div class="lightbox-close">✕</div>
  <img id="lightbox-img" src="" alt="">
</div>
<div class="toast" id="toast"></div>

`;
const APP_JS = `
// ══ USERS ══
var USERS = JSON.parse(localStorage.getItem('ldlc_users') || 'null');
if (!USERS) {
  USERS = [
    {id:'admin', name:'Administrateur', pass:'ldlc2024', role:'admin'},
    {id:'tech1',  name:'Technicien 1',   pass:'tech1',    role:'tech'},
    {id:'tech2',  name:'Technicien 2',   pass:'tech2',    role:'tech'}
  ];
  localStorage.setItem('ldlc_users', JSON.stringify(USERS));
}
var currentUser = null;

function initLogin() {
  var saved = sessionStorage.getItem('ldlc_session');
  if (saved) { currentUser = JSON.parse(saved); showApp(); return; }
  renderLoginUsers();
}

function renderLoginUsers() {
  var el = document.getElementById('login-users-list');
  el.innerHTML = USERS.map(function(u){
    return '<div class="login-user-chip" onclick="quickLogin(\\''+u.id+'\\')">'+u.name.charAt(0)+' '+u.name+'</div>';
  }).join('');
}

function quickLogin(id) {
  var u = USERS.find(function(x){return x.id===id;});
  if (!u) return;
  document.getElementById('login-user').value = u.id;
  document.getElementById('login-pass').value = u.pass;
  doLogin();
}

function doLogin() {
  var uid = document.getElementById('login-user').value.trim();
  var pass = document.getElementById('login-pass').value;
  var u = USERS.find(function(x){return x.id===uid && x.pass===pass;});
  if (!u) { document.getElementById('login-error').textContent = 'Identifiant ou mot de passe incorrect'; return; }
  currentUser = u;
  sessionStorage.setItem('ldlc_session', JSON.stringify(u));
  showApp();
}

function showApp() {
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  document.getElementById('nav-username').textContent = currentUser.name;
  document.getElementById('nav-avatar').textContent = currentUser.name.charAt(0).toUpperCase();
  updateCount();
  document.getElementById('d-date').value = new Date().toISOString().split('T')[0];
  setTimeout(initCPUAutocomplete, 200);
  checkHash();
}

function doLogout() {
  sessionStorage.removeItem('ldlc_session');
  currentUser = null;
  document.getElementById('login-page').style.display = '';
  document.getElementById('app').style.display = 'none';
}

// ══ STATE ══
var currentType = 'laptop_no_gpu';
var productImg = null;
var parc = JSON.parse(localStorage.getItem('ldlc_parc') || '[]');
var filterState = 'all';
var editImgData = null;
var currentQRPcId = null;
var viewingDiagPcId = null;

// ══ LOGOS ══
const L_HEADER   = 'data:image/png;base64,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';
const L_RECO_MAG = 'data:image/png;base64,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';
const L_TESTED   = 'data:image/png;base64,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';
const L_GARANTIE = 'data:image/png;base64,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';
const ICON_SRCS  = {
  cpu:    'data:image/png;base64,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',
  ram:    'data:image/png;base64,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',
  gpu:    'data:image/png;base64,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',
  ssd:    'data:image/png;base64,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',
  screen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAMrUlEQVR4nO2bf4wd1XXHP+feO/Pe7np37bW9YJwUAwZim4ryIymtG8WOCCLpjyRF0B+RWkVRUdWoqqpK/aGmsqkitZWqKqhqJYiqBLUSkYmSUNQ4hSp2YkxoaicxwSahhJ+2MbbXrNdvd9/M3HtP/5h56wV2973NYtfAfKS3b3bmzp073zn33nPunAc1NTU1NTU1NTU1NTU1NTU1i0C6FVBVexDsoYOw8Xy06EJhExyCcIdI+KnrUNWuAr/d6aaBm+/Avn2aiEhx8EjxsbTpPvXS8XbR10ycCW1M8EQDBoNYgSgoETrXEi23Z39Db/sWW8d85RdVh4FoEVImvUEG8GtWk7zy4tTnReTf9+3T5MYbpehZwB2q9qHthJcL/eAPDhz+l/vu/+bIVAhIYklU0aioKiKCsQJRiZzjezynz0bplwSC4QwpOUoMp/nU7TdvHS/014cdj6iqlTm685wC3g7xn3bvtn+yfcsPd3/nya8++j9P/87REydDFOPIk4IggIICphQQFETKfdXh13zT477q5nuuY77yi6pDcdpCsxZ2+WiSWyu0xtofv/X9A3nBcklEd+2auyvPKeADYL61e0sQ2HTNpg0fyv/tUZYNrk43XrPBvO/aDQ6fEWN8zTlRtWzfXI1+U25ykeUXUwfCgHpcanj8R4d5/AcHyVPjbDKgJqG0ui1zKTWPgHeIhFv/8O7G4D/+0e7f+PS//sOa0bWfe/HYmP/Yhz+Q/data7+gWcS/TsBSxTn2vRUwBoKjsQyu2Nf65DNHDvcdeWmC9mQWsxblTe2e+9R5J5HBkTWqquaP73po+Y+fGUNC4QZcMnbpoHz6XNzDhcIXvnn0Nimm+qLPdM3qS+xQg/6Fys8rIICIxD/4yy8H6xxGI8V0y379aW28cuR5uWhtoQud+1bjlSOJXLR2nY699JwVbbNy+ar0v3btuffjm2/ZecOddyZbtuDnOm9BAQGmDEw5UKcYvH7kKsleO9e9TVAVRPT+PS9oEMuZ6cz/7FXv/ohv86X9996z+4GbMcAbZmHTrV5vHLkVVAJnR+G3LxqErPCsXHlx+o1H93/RNdmz8fYHkjvumDsi6SrgOxURYXJqqi0ic3bdDrWACyBiu4aytYBLpBZwidQCLpFawCVSC7hEagGXSC3gEqkFnAcRIS/Cgk401ALOiSB47/XiVUMrVLXZt+LyeWPYHgSMCB5Fq3j47U/TJhw7diz/6C3v/9M859f233tjsWuXzrnw0lVAQ0RUCSYS7Ft0wXQRGBVsFCyWyZBrls69jDVTvteKBZC3s35V1OuiYlShfGkmwS/87rw3AYXqlZZdYisvfATFaClMLy/Fu3fhaDBRkJ6qe+tjNWKJ5dDVQ4/rsQsLIOg7YM4WQLQc96UHm+lBEkPnmWh4ByiIQREsYKJ0HbS6vhOJRIwRYlSSNGHbjifTUy/vlJE1O17nG20EDv3UzT7nHJy1vemNhzv3VOAQkxDCFBC7KtRVQIzBqxKNkKSNeNevXpEvquFvMb6ytxWT/kEKHUfEYLvEIj1YIARVglLsP/jsyN898PQen7XQmQyA0hDFGDRcuH7O7JaZzuCmOpOdECWj0Wjw7f0HRo6fbhGNwSbdvY6uAvoILm2SFV6/9LVvpEMrRn4pBo9IOR6GEBARrLWoXihv7crEp5n/VGc+ANa6an8s94lipIVzkYlXA1k7xTUHyPKM1nS24JV6s0AAhCIPHDt2JpRPTsonGGO5bW2VZPQmMzunpdfynUSnDp0HWznIiJw9rlq6t3ECbMS4IRtNgjVKJEJYOHztaRIJeQYCv3DLB1l1xaV2OsSZ9LYYY5nmVk00///ozN+OhKU1lvtjlZ7XaTNCZYWRwb6Uo8+Ns3fnLsL0JK7ZYNmyBTM7ehDQezAOisAl69/Fpl++mrEMiGDs2Yc7H/KGjdfd61yZVMzanpVJN7uebnkRUcveYymNrZFC4kqDmpou6+trQKMB6iGfgOUpPDXQYu8jj0FoUeRdV7O6C9ifggttUDhdBE5NRk63legDxphZAgiKzpl9VjqnnT1aBdUdBQylrzlLHRQhIGQgEdUEJSViy9MBq52zFSFS9pWqdyLkBAqUhrU0JeHE86d49eRJhgaWsXzVatI+xytHW4ydOMGATRgcHSWMNJhq5yTaIOZCmqWELj5HVwEdIL4NaQJpPwSDxICoQlA6uogoRO2k21WztKJaRZXV/+Cr70gUKeuhLKfV/0oZBVhCJaAjUC6siUqZpKLgCKBxJu1EBTQqRgXXcOR5jnUJJggHdj/Oj77+n6xYfyUf/sRvc/HVq9i//xD/veOrNJYNsuX3f5NVl11JtJ6QT+PyjCbNObJhFikgMSLWQgSJWuoYIlFApBwLFSkFfEMSZznDBSiTWmcflio8ZJa2EivDLPOWJS4DEQRTjfvxrPWqx0us0nQF1KAYTBCsF4xLMAhpwxCmI+OnXiV/7jleHV6OppbmIEy0p8hfPkw+OMh4+1VMA0I6TXQTaHMan0zRzentboEuxRoHmafIcnKvZDGgWna6jnsw/2JDIKqt4ujS8phJNzFVlxQUw+zOLyqIbyAYokQwHkyBSiCIp+PZKRYVg6pDERwGNUq7PYkmlpYXJASuvOkGdHgZoytXkgz18+LJyKorLuXST36CfpcwtHKY05OB3GfQAGl6Mp1euoDEiOYBrGWwf4Bmv9BMmmhQxHQEZP61H6VcoOxYFrxmYVH0dadWKxaCYpytVtJKkRBbiimx/C7XTIhiQG1piVI+SouAc8Sg9KWO6zdv5L2bN4LAZA7tELnm59dz3U3rsRGmvGeoYRloDECIBO+RNCFNlyigb+cQC8Qa2qdOk79cELMCVTBGZrlW86sYgBBlZmbp5FJLR9QqU76SdGYoiJJR2Vi135T6qqA4oulMH5RWrSAEDAVJaglk+CwQnSWTSPQBxDKZeSRx+D5HVhSYKHhjOX1ayccCJvRBSEltP7ZLMNJVQNFCh/pTtGjp9771bT2w/wkyn5X+ZxV9dLqwzuPxRgHECNpxPmb7LnHWB8CCCiJG1FVTh1Y+SRRVbFmm+iiAUVQjQsRIOXurBoxzpSUpWLEE77HWQmKJGkAc0YdyHE2aaHC46UDaVqwk6qcK8nzhhdD5BTxULV8U7aSYHieJrfT00ZdkOjvMzCpY52cNC6IgAdoT0BgQCiBtntUx5JBQmqMPpbm6vjLCMRGsgPeK90LSFMSAB8SCdNrRiZeKUmhpgi+jJGk00eDLdsQItuMV6CwfCwgF4gQXDCOpIKbdlLxFyF8TRvcu4M03X6I7dqj89ee+cuqite9m7Y+fPT4dNGsmg4KYnkMOIRoxMa4YTn8mz2W8NVVMiDqZbudqrSC2mlRCxBiLSCKJa+ix46dGD7083mxNt+NNv3iduWzNsD959OhRvDdpkkQfFDVSXUMxeEz0QIomy3Ak+DwvJzdrwUhpdVC+70BQKXtHFMURSI3SHp/AaVa8a3Rd8sIzB+5ec9uGB++5555k69a5f6m0IE8+qSnAT07q36jqHKto3anukWdfOfPZlurPdSvf6S/33v/9/7j2V/5el7/3M+1/fvDI2ITq782u70JhwTHwmmskV1URkb8A2LZtm7kL2Mb2ni9w113b2bYNLr9o8DOA/O62Xc25Sz4PrGPdyHT6/Km+vJg8ntAeZ3Sw2fjfJw48MvTRtZ+/8892DGfHJjPWrZv3euvWAQOrIwc3+UOHHpCNG29fZIC+/ezW9u0q8iYk06uq27bt/L4Rue/L+x7c8KHtetnWz+pf3b3nofN57cVwzjvEPt2X3Cg3FruePvXnTz310i0vPHPEa+hzIRq88WACajw+ZDjbwLgBQfr0+LHxa3c+/sOR6cLzgeuvPrXpijUHdGpMTPSaNAdoq8Hj8KQoAYtHs7a/6vJht+HK4Ydvvf49f7vQryzfLLo70ktk784hA/CTwxPXfe3h72797t59LBtag7EpeQh4zTAOAoHShUmwto+x8RbB4zHw8He+P/K9J57c2ohtnBh8AG+apYDigIDRQD55hhs2rSTV95wAuG/vznPea865gB1STczI0AqGh/oZWt6gUEO/aeBjE2Nt5VkEwCCqjCxfCeIcImj04HMMjXL2VCWqVNGJoOpADS1JWDGQMpwaA7D+PNzXORdw8+hEBFi/duVjt93yvsb1V68OSWPABjWkyQDTvoqLZzyjzlJXxMaOAb1xpAkaEDEYhFg5o3lWhKvX9tvLR91jAJs3j164L2lqSs6bV7Vrl7oTqzEHDx3sXngJbNoIq0+ciFu3bu2+nFxTU1NTU1NTU1NTU1NTU1Nzvvk/MspZUpxuKdkAAAAASUVORK5CYII='
};

// ══ NAV ══
function showTab(tab) {
  ['diag','gen','parc'].forEach(function(t){
    document.getElementById('page-'+t).style.display = t===tab ? '' : 'none';
    document.getElementById('tab-'+t).classList.toggle('active', t===tab);
  });
  if (tab==='parc') renderParc();
}

// ══ PRICE CALC ══
function calcPrices() {
  var achat = parseFloat(document.getElementById('d-prix-achat').value);
  var ttc   = parseFloat(document.getElementById('d-price').value);
  var box   = document.getElementById('price-calc-box');
  if (!achat && !ttc) { box.style.display='none'; return; }
  box.style.display = '';
  var venteHT = ttc ? (ttc / 1.2) : 0;
  var marge   = (achat && venteHT) ? venteHT - achat : 0;
  document.getElementById('calc-achat').textContent    = achat ? achat.toFixed(2)+'€' : '—';
  document.getElementById('calc-vente-ht').textContent = venteHT ? venteHT.toFixed(2)+'€' : '—';
  var mEl = document.getElementById('calc-marge');
  mEl.textContent = (achat && venteHT) ? marge.toFixed(2)+'€' : '—';
  mEl.className = 'price-calc-val ' + (marge >= 0 ? 'green' : 'red');
}

function calcEditPrices() {
  var achat = parseFloat(document.getElementById('edit-prix-achat').value);
  var ttc   = parseFloat(document.getElementById('edit-price').value);
  var box   = document.getElementById('edit-price-calc');
  if (!achat && !ttc) { box.style.display='none'; return; }
  box.style.display = '';
  var venteHT = ttc ? (ttc / 1.2) : 0;
  var marge   = (achat && venteHT) ? venteHT - achat : 0;
  document.getElementById('edit-calc-achat').textContent = achat ? achat.toFixed(2)+'€' : '—';
  document.getElementById('edit-calc-vente').textContent = venteHT ? venteHT.toFixed(2)+'€' : '—';
  var mEl = document.getElementById('edit-calc-marge');
  mEl.textContent = (achat && venteHT) ? marge.toFixed(2)+'€' : '—';
  mEl.className = 'price-calc-val ' + (marge >= 0 ? 'green' : 'red');
}



// ══ CPU AUTOCOMPLETE ══
var CPU_DB = [
  // Intel Core i3
  'Intel Core I3-12100','Intel Core I3-12300','Intel Core I3-13100','Intel Core I3-13300',
  'Intel Core I3-14100','Intel Core I3-10100','Intel Core I3-10300','Intel Core I3-1115G4',
  // Intel Core i5
  'Intel Core I5-10210U','Intel Core I5-10400','Intel Core I5-10500','Intel Core I5-10600',
  'Intel Core I5-11400','Intel Core I5-11600K','Intel Core I5-12400','Intel Core I5-12500',
  'Intel Core I5-12600K','Intel Core I5-13400','Intel Core I5-13500','Intel Core I5-13600K',
  'Intel Core I5-14400','Intel Core I5-14500','Intel Core I5-14600K',
  // Intel Core i7
  'Intel Core I7-10700','Intel Core I7-10750H','Intel Core I7-10850H',
  'Intel Core I7-11700','Intel Core I7-11800H','Intel Core I7-12700','Intel Core I7-12700H',
  'Intel Core I7-12700K','Intel Core I7-1260P','Intel Core I7-1265U',
  'Intel Core I7-13700','Intel Core I7-13700H','Intel Core I7-13700K',
  'Intel Core I7-14700','Intel Core I7-14700H','Intel Core I7-14700K',
  // Intel Core i9
  'Intel Core I9-10900','Intel Core I9-11900K','Intel Core I9-12900K',
  'Intel Core I9-13900K','Intel Core I9-14900K',
  // AMD Ryzen 3
  'AMD Ryzen 3 3200G','AMD Ryzen 3 4300G','AMD Ryzen 3 5300G','AMD Ryzen 3 7300X',
  // AMD Ryzen 5
  'AMD Ryzen 5 3600','AMD Ryzen 5 4500','AMD Ryzen 5 4600G','AMD Ryzen 5 5500',
  'AMD Ryzen 5 5600','AMD Ryzen 5 5600G','AMD Ryzen 5 5600X','AMD Ryzen 5 7500F',
  'AMD Ryzen 5 7600','AMD Ryzen 5 7600X',
  // AMD Ryzen 7
  'AMD Ryzen 7 3700X','AMD Ryzen 7 4700G','AMD Ryzen 7 5700G','AMD Ryzen 7 5700X',
  'AMD Ryzen 7 5800H','AMD Ryzen 7 5800X','AMD Ryzen 7 5800X3D',
  'AMD Ryzen 7 7700','AMD Ryzen 7 7700X','AMD Ryzen 7 7745HX',
  'AMD Ryzen 7 7800X3D','AMD Ryzen 7 7840H',
  // AMD Ryzen 9
  'AMD Ryzen 9 5900X','AMD Ryzen 9 5950X','AMD Ryzen 9 7900X','AMD Ryzen 9 7950X',
  'AMD Ryzen 9 7945HX'
];

function initCPUAutocomplete() {
  var input = document.getElementById('d-cpu');
  if (!input) return;
  var list = document.createElement('div');
  list.id = 'cpu-autocomplete';
  list.style.cssText = 'position:absolute;z-index:999;background:#fff;border:1px solid #e0e4ee;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.12);max-height:200px;overflow-y:auto;width:100%;display:none;';
  input.parentNode.style.position = 'relative';
  input.parentNode.appendChild(list);

  input.addEventListener('input', function() {
    var q = input.value.trim().toLowerCase();
    list.innerHTML = '';
    if (q.length < 2) { list.style.display='none'; return; }
    var matches = CPU_DB.filter(function(cpu){ return cpu.toLowerCase().includes(q); }).slice(0,8);
    if (!matches.length) { list.style.display='none'; return; }
    matches.forEach(function(cpu) {
      var item = document.createElement('div');
      item.textContent = cpu;
      item.style.cssText = 'padding:8px 12px;font-size:11px;cursor:pointer;border-bottom:1px solid #f0f0f0;font-family:Montserrat,Arial,sans-serif;';
      item.onmouseenter = function(){ this.style.background='#f0f4fb'; };
      item.onmouseleave = function(){ this.style.background=''; };
      item.onclick = function() {
        input.value = cpu;
        list.style.display = 'none';
        if (typeof upd === 'function') upd();
        if (typeof updateCodeArticle === 'function') updateCodeArticle();
      };
      list.appendChild(item);
    });
    list.style.display = 'block';
  });
  document.addEventListener('click', function(e){ if(e.target!==input) list.style.display='none'; });
}

// Init autocomplete when app loads

// ══ SMART SPEC EXTRACTION ══
function extractRAM(raw) {
  if (!raw) return raw;
  // "16GB DDR5 Kingston 5600MHz" → "16 Go DDR5"
  var m = raw.match(/(\\d+)\\s*[Gg][Bo]/);
  var size = m ? m[1] + ' Go' : '';
  var gen = raw.match(/DDR[45]L?|LPDDR[45]L?/i);
  var genStr = gen ? gen[0].toUpperCase() : '';
  return [size, genStr].filter(Boolean).join(' ') || raw;
}
function extractSSD(raw) {
  if (!raw) return raw;
  // "Kingston SA400S37480G 480Go SSD" → "SSD 480 Go"
  var m = raw.match(/(\\d+)\\s*[Gg][Bo]/);
  var size = m ? m[1] + ' Go' : '';
  var isSSD = /SSD|NVMe|M\\.2/i.test(raw);
  var isHDD = /HDD|Disque dur/i.test(raw);
  var type = isSSD ? 'SSD' : isHDD ? 'HDD' : 'SSD';
  return size ? type + ' ' + size : raw;
}
function extractCPU(raw) {
  if (!raw) return raw;
  // "Intel Core i7-14700K 3.4GHz" → "Intel Core I7-14700K"
  // Keep brand + model, remove freq
  var clean = raw.replace(/\\s*@?\\s*\\d+\\.\\d+\\s*[Gg][Hh]z\\b/gi, '').trim();
  // Capitalize CPU model
  clean = clean.replace(/\\b(i[3579]|ryzen\\s*[3579]|xeon|celeron|pentium|athlon)/gi, function(m){ return m.toUpperCase(); });
  return clean;
}

// ══ BARCODE ══
function barcodeHTML(txt, w, h) {
  // Code 128B — standard industriel, lisible par toutes les douchettes
  var code128B = [
    [2,0,6,2,0],[2,0,2,6,0],[2,0,2,0,6],[2,0,0,6,2],[2,0,0,2,6],
    [6,0,2,0,2],[2,0,6,0,2],[2,0,0,2,0],[6,2,0,2,0],[2,6,0,0,2],
    [2,0,6,2,0],[2,0,2,6,0],[2,0,2,0,6],[2,0,0,6,2],[2,0,0,2,6],
    [6,0,2,0,2],[2,0,6,0,2],[2,0,0,2,0],[6,2,0,2,0],[2,6,0,0,2],
    [2,2,6,0,0],[2,6,2,0,0],[0,2,2,6,0],[0,2,6,2,0],[0,6,2,2,0],
    [2,2,0,6,0],[2,6,0,2,0],[0,2,2,0,6],[0,2,6,0,2],[0,6,2,0,2],
    [2,2,0,0,6],[2,6,0,0,2],[0,2,0,2,6],[0,2,6,2,0],[0,6,2,2,0],
    [2,2,0,6,0],[2,6,0,2,0],[0,0,6,2,2],[2,0,0,6,2],[2,0,2,0,6],
    [0,0,2,6,2],[0,0,6,2,2],[2,0,2,2,6],[2,0,6,2,2],[0,0,2,2,6],
    [2,6,2,2,0],[0,6,0,2,2],[2,2,0,2,6],[2,2,6,0,2],[2,2,0,6,2],
    [0,2,0,6,2],[0,2,6,0,2],[2,0,6,2,0],[6,0,2,2,0],[2,0,0,2,6],
    [0,2,0,2,6],[0,2,6,2,0],[6,2,2,0,2],[6,0,2,0,2],[2,6,0,2,0],
    [2,2,6,2,0],[0,2,2,6,2],[0,2,6,2,2],[2,0,2,6,2],[2,2,0,0,6],
    [6,2,0,0,2],[2,2,6,0,0],[2,0,0,6,0],[0,6,2,0,2],[2,0,6,0,0],
    [0,2,2,0,6],[6,0,0,2,2],[0,6,0,2,2],[2,2,0,2,0],[0,6,2,2,0],
    [2,2,6,2,0],[0,2,6,2,2],[2,0,2,6,2],[2,2,0,0,6],[6,2,0,0,2],
    [2,2,6,0,0],[2,0,0,6,0],[0,6,2,0,2],[2,0,6,0,0],[0,2,2,0,6],
    [6,0,0,2,2],[0,6,0,2,2],[2,2,0,2,0],[0,0,0,4,2],[0,0,2,4,0],
    [0,0,2,0,4],[0,4,0,2,0],[0,0,4,2,0],[0,2,0,4,0],[2,0,4,0,0],
    [0,4,2,0,0],[4,0,0,2,0],[0,2,4,0,0],[4,0,2,0,0],[2,0,0,4,0]
  ];

  // Patterns simplifié pour Code 128 — utiliser un encodage direct par caractère
  // Chaque caractère = 11 modules (barres+espaces alternés)
  // On utilise les patterns réels de Code 128B
  var PATTERNS = {
    START_B: "11010010000",
    STOP:    "1100011101011",
    CHARS: [
      "11011001100","11001101100","11001100110","10010011000","10010001100",
      "10001001100","10011001000","10011000100","10001100100","11001001000",
      "11001000100","11000100100","10110011100","10011011100","10011001110",
      "10111001100","10011101100","10011100110","11001110010","11001011100",
      "11001001110","11011100100","11001110100","11101101110","11101001100",
      "11100101100","11100100110","11101100100","11100110100","11100110010",
      "11011011000","11011000110","11000110110","10100011000","10001011000",
      "10001000110","10110001000","10001101000","10001100010","11010001000",
      "11000101000","11000100010","10110111000","10110001110","10001101110",
      "10111011000","10111000110","10001110110","11101110110","11010001110",
      "11000101110","11011101000","11011100010","11011101110","11101011000",
      "11101000110","11100010110","11101101000","11101100010","11100011010",
      "11101111010","11001000010","11110001010","10100110000","10100001100",
      "10010110000","10010000110","10000101100","10000100110","10110010000",
      "10110000100","10011010000","10011000010","10000110100","10000110010",
      "11000010010","11001010000","11110111010","11000010100","10001111010",
      "10100111100","10010111100","10010011110","10111100100","10011110100",
      "10011110010","11110100100","11110010100","11110010010","11011011110",
      "11011110110","11110110110","10101111000","10100011110","10001011110",
      "10111101000","10111100010","11110101000","11110100010","10111011110",
      "10111101110","11101011110","11110101110","11010000100","11010010000"
    ]
  };

  var text = (txt || "CV0000000000").toUpperCase();

  // Calculer checksum Code 128B
  var sum = 104; // valeur START B
  var encoded = PATTERNS.START_B;
  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i) - 32;
    if (charCode >= 0 && charCode < PATTERNS.CHARS.length) {
      sum += (i + 1) * charCode;
      encoded += PATTERNS.CHARS[charCode];
    }
  }
  var check = sum % 103;
  if (check < PATTERNS.CHARS.length) encoded += PATTERNS.CHARS[check];
  encoded += PATTERNS.STOP;

  // Convertir les modules en SVG
  var bars = "";
  var x = 0;
  var moduleW = w / encoded.length;
  // Minimum 1px par module pour lisibilité — recalculer si nécessaire
  if (moduleW < 1) moduleW = 1;
  var totalW = encoded.length * moduleW;

  for (var j = 0; j < encoded.length; j++) {
    if (encoded[j] === "1") {
      bars += "<rect x=\\"" + (j * moduleW).toFixed(2) + "\\" y=\\"0\\" width=\\"" + moduleW.toFixed(2) + "\\" height=\\"" + h + "\\" fill=\\"#000\\"/>";
    }
  }

  return "<svg viewBox=\\"0 0 " + totalW.toFixed(0) + " " + h + "\\" xmlns=\\"http://www.w3.org/2000/svg\\" style=\\"width:" + w + "px;height:" + h + "px;\\">" + bars + "</svg>";
}


// ══ LABEL ══
// ── LABEL BUILDER ──
function buildLabelHTML(data) {
  var model  = data.model  || "Nom du modèle";
  var ref    = data.ref    || "";
  var serial = data.serial || "";
  var price  = data.price  || "000";
  var os     = data.os     || "WINDOWS 11 INSTALLÉ";
  var img    = data.img    || null;
  var specs  = data.specs  || [];
  var legal  = "*Garantie légale de conformité (12 mois) : en cas de défaut, réparation, remplacement ou remboursement. Garantie des vices cachés (2 ans). Voir affichage en magasin.";

  var specsHTML = "";
  for (var i = 0; i < specs.length; i++) {
    var src = ICON_SRCS[specs[i].key] || "";
    specsHTML += "<div class=\\"lbl-spec\\"><img src=\\""+src+"\\" class=\\"lbl-spec-img\\" alt=\\"\\"><div class=\\"lbl-spec-val\\">"+specs[i].val+"</div></div>";
  }

  var photoHTML = img
    ? "<img src=\\""+img+"\\" alt=\\"produit\\">"
    : "<svg viewBox=\\"0 0 160 130\\" style=\\"width:160px;height:130px;\\"><rect width=\\"160\\" height=\\"130\\" fill=\\"#f4f7fa\\" rx=\\"6\\"/><text x=\\"80\\" y=\\"72\\" text-anchor=\\"middle\\" font-size=\\"10\\" fill=\\"#c0c8d0\\" font-family=\\"Montserrat,Arial\\">Photo du produit</text></svg>";

  var h = "";
  h += "<div class=\\"lbl-head\\"><img src=\\""+L_HEADER+"\\" class=\\"lbl-header-img\\" alt=\\"LDLC\\"></div>";
  h += "<div class=\\"lbl-titlebar\\"><div class=\\"lbl-model\\">"+model+"</div>"+(ref?"<div class=\\"lbl-ref\\">"+ref+"</div>":"")+"</div>";
  h += "<div class=\\"lbl-specs\\">"+specsHTML+"</div>";
  h += "<div class=\\"lbl-body\\"><div class=\\"lbl-photo\\">"+photoHTML+"</div>";
  h += "<div class=\\"lbl-badges\\">";
  h += "<div class=\\"lbl-badge\\"><img src=\\""+L_RECO_MAG+"\\" alt=\\"\\"><span>Reconditionné<br>en magasin</span></div>";
  h += "<div class=\\"lbl-badge\\"><img src=\\""+L_TESTED+"\\" alt=\\"\\"><span>Testés et<br>garantis</span></div>";
  h += "</div></div>";
  h += "<div class=\\"lbl-price-section\\"><div class=\\"lbl-price-wrap\\">";
  h += "<div class=\\"lbl-price-box\\"><div class=\\"lbl-price-eur\\">";
  h += "<span class=\\"lbl-price-int\\">"+price+"</span><span class=\\"lbl-price-sym\\">&#8364;</span><span class=\\"lbl-price-dec\\">95</span>";
  h += "</div>"+(serial?"<div class=\\"lbl-price-cv\\">"+serial+"</div>":"")+"</div>";
  h += "<img src=\\""+L_GARANTIE+"\\" class=\\"lbl-garantie-img\\" alt=\\"\\"></div></div>";
  h += "<div class=\\"lbl-footer\\"><div class=\\"lbl-footer-main\\">";
  h += "<div class=\\"lbl-legal\\">"+legal+"</div>";
  h += "<div class=\\"lbl-barcode-col\\">"+barcodeHTML(serial,120,30)+"<div class=\\"lbl-cv-text\\">"+(serial||"")+"</div></div>";
  h += "</div><div class=\\"lbl-win\\">"+os+"</div></div>";
  return h;
}

// ══ PRINT LABEL ══
function doPrintLabel(labelHTML) {
  var css = [
    '@page{size:105mm 148mm;margin:0;}',
    'html,body{width:105mm;height:148mm;margin:0;padding:0;background:#fff;}',
    '.lbl-wrap{width:105mm;height:148mm;display:flex;flex-direction:column;overflow:hidden;font-family:Montserrat,Arial,sans-serif;background:#fff;}',
    '.lbl-head{background:#0A3782;padding:0;line-height:0;flex-shrink:0;}',
    '.lbl-header-img{width:100%;height:auto;display:block;}',
    '.lbl-titlebar{background:#0096C8;color:#fff;text-align:center;padding:4px 8px;flex-shrink:0;}',
    '.lbl-model{font-size:9.5px;font-weight:800;line-height:1.2;}',
    '.lbl-ref{font-size:6px;opacity:.9;margin-top:1px;}',
    '.lbl-specs{display:flex;background:#e8f0f5;flex-shrink:0;}',
    '.lbl-spec{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:5px 3px 4px;border-right:1px solid #c5d5e0;flex:1;min-height:58px;}',
    '.lbl-spec:last-child{border-right:none;}',
    '.lbl-spec-img{width:24px;height:24px;object-fit:contain;margin-bottom:4px;}',
    '.lbl-spec-val{font-size:6.5px;font-weight:700;color:#0A3782;text-align:center;line-height:1.2;white-space:pre-line;}',
    '.lbl-body{display:flex;flex:1;min-height:0;background:#fff;}',
    '.lbl-photo{flex:1;display:flex;align-items:center;justify-content:center;padding:4px;}',
    '.lbl-photo img{max-width:100%;max-height:100%;object-fit:contain;}',
    '.lbl-badges{width:70px;flex-shrink:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:7px;padding:5px 4px;overflow:hidden;}',
    '.lbl-badge{display:flex;align-items:center;gap:3px;font-size:5.5px;font-weight:600;color:#767A7A;line-height:1.3;width:100%;}',
    '.lbl-badge span{word-break:break-word;min-width:0;}',
    '.lbl-badge img{width:18px;height:18px;object-fit:contain;mix-blend-mode:multiply;flex-shrink:0;}',
    '.lbl-price-section{flex-shrink:0;padding:3px 8px 2px;background:#fff;}',
    '.lbl-price-wrap{position:relative;display:inline-block;}',
    '.lbl-price-box{display:flex;flex-direction:column;align-items:center;padding:3px 40px 3px 10px;border:2px solid #0A3782;border-radius:3px;}',
    '.lbl-price-eur{display:flex;align-items:flex-start;}',
    '.lbl-price-int{font-size:28px;font-weight:900;color:#0A3782;line-height:1;}',
    '.lbl-price-sym{font-size:15px;font-weight:900;color:#0A3782;margin-top:3px;}',
    '.lbl-price-dec{font-size:11px;font-weight:900;color:#0A3782;margin-top:3px;}',
    '.lbl-price-cv{font-size:5px;color:#555;margin-top:1px;text-align:center;}',
    '.lbl-garantie-img{width:34px;height:auto;position:absolute;top:-7px;right:-7px;}',
    '.lbl-footer{flex-shrink:0;background:#fff;padding:3px 8px 4px;border-top:1px solid #e0e0e0;}',
    '.lbl-footer-main{display:flex;align-items:flex-start;gap:6px;}',
    '.lbl-legal{font-size:3.8px;color:#444;line-height:1.5;flex:1;}',
    '.lbl-legal strong{font-weight:700;}',
    '.lbl-barcode-col{display:flex;flex-direction:column;align-items:center;gap:2px;flex-shrink:0;margin-left:auto;}',
    '.lbl-cv-text{font-size:5.5px;color:#333;font-family:monospace;text-align:center;}',
    '.lbl-win{font-size:5px;font-weight:800;color:#0A3782;letter-spacing:.03em;margin-top:2px;}'
  ].join('');
  var win = window.open('','_blank','width=420,height=600');
  win.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Etiquette LDLC</title>');
  win.document.write('<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">');
  win.document.write('<style>'+css+'</style></head><body>');
  win.document.write('<div class="lbl-wrap">'+labelHTML+'</div>');
  win.document.write('<scr'+'ipt>window.onload=function(){window.print();};<'+'/scr'+'ipt>');
  win.document.write('</body></html>');
  win.document.close();
}

// ══ DIAGNOSTIC ══
var diagVerdict = 'vente';
function setVerdict(status, btn) {
  diagVerdict = status;
  ['ok','amv','ko','reserve'].forEach(function(b){
    var el=document.getElementById('v-'+b);
    if(el){el.classList.remove('active');if(b==='amv'){el.style.background='#fffbeb';el.style.color='#d97706';}}
  });
  var el=document.getElementById('v-'+btn);
  if(el){el.classList.add('active');if(btn==='amv'){el.style.background='#d97706';el.style.color='#fff';}}
}

function dv(id){ var el=document.getElementById(id); return el?el.value.trim():''; }
function dc(id){ var el=document.getElementById(id); return el?el.checked:false; }

function diagGetSpecs() {
  var specs=[
    {key:'cpu',    val:extractCPU(dv('d-cpu'))||'—'},
    {key:'ram',    val:extractRAM(dv('d-ram'))||'—'},
    {key:'ssd',    val:extractSSD(dv('d-ssd'))||'—'}
  ];
  var sc=dv('d-screen'), gpu=dv('d-gpu');
  if(sc) specs.push({key:'screen',val:sc});
  if(gpu) specs.push({key:'gpu',val:gpu});
  return specs;
}

function buildDiagData() {
  var achat = parseFloat(dv('d-prix-achat')) || 0;
  var ttc   = parseFloat(dv('d-price')) || 0;
  return {
    id: Date.now(), type:'laptop_no_gpu',
    model:dv('d-model'), ref:dv('d-ref'), serial:dv('d-serial'),
    cpu:dv('d-cpu'), ram:dv('d-ram'), ssd:dv('d-ssd'),
    gpu:dv('d-gpu'), screen:dv('d-screen'),
    price:dv('d-price'), os:dv('d-os'),
    prixAchat: achat, venteHT: ttc ? (ttc/1.2).toFixed(2) : 0,
    marge: (achat && ttc) ? ((ttc/1.2)-achat).toFixed(2) : 0,
    status:diagVerdict, img:null,
    specs:diagGetSpecs(),
    date:new Date().toLocaleDateString('fr-FR'),
    tech:dv('d-tech'), notes:'', docs:[],
    diag:{
      hw:{memtest:dc('d-memtest'),smart:dc('d-smart'),screenshot:dc('d-screenshot'),firmware:dc('d-firmware'),bios:dc('d-bios'),pile:dc('d-pile'),depoussierage:dc('d-depoussierage'),thermique:dc('d-thermique'),temp:dc('d-temp'),batterie:dc('d-batterie'),plasturgie:dc('d-plasturgie'),obs:dv('d-obs-hw'),batterieNiveau:dv('d-batterie-niveau'),tempVal:dv('d-temp-val'),biosVer:dv('d-bios-ver'),firmwareVer:dv('d-firmware-ver'),plasturgieEtat:dv('d-plasturgie-etat')},
      sys:{premier:dc('d-1ere'),demarrage:dc('d-demarrage'),pilotes:dc('d-pilotes'),alim:dc('d-alim'),antivirus:dc('d-antivirus'),logiciels:dc('d-logiciels'),nettoyage:dc('d-nettoyage'),activation:dc('d-activation'),
      logList:[dc('d-log-firefox')?'Firefox':'',dc('d-log-chrome')?'Chrome':'',dc('d-log-vlc')?'VLC':'',dc('d-log-7zip')?'7-Zip':'',dc('d-log-libre')?'LibreOffice':'',dc('d-log-acrobat')?'Adobe Reader':'',dc('d-log-office')?'Microsoft Office':'',dv('d-logiciels-list')].filter(Boolean).join(', '),
      obs:dv('d-obs-sys')}
    }
  };
}

function resetDiagForm() {
  ['d-model','d-ref','d-cpu','d-ram','d-ssd','d-gpu','d-screen',
   'd-price','d-prix-achat','d-tech','d-obs-hw','d-obs-sys',
   'd-batterie-niveau','d-temp-val','d-bios-ver','d-firmware-ver','d-plasturgie-etat'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.value='';
  });
  ['d-memtest','d-smart','d-screenshot','d-firmware','d-bios','d-pile',
   'd-depoussierage','d-thermique','d-temp','d-batterie','d-plasturgie',
   'd-1ere','d-demarrage','d-pilotes','d-alim','d-antivirus','d-logiciels',
   'd-nettoyage','d-activation',
   'd-log-firefox','d-log-vlc','d-log-7zip','d-log-libre','d-log-acrobat','d-log-chrome','d-log-office'].forEach(function(id){
    var el=document.getElementById(id); if(el) el.checked=false;
  });
  setVerdict('vente','ok');
  diagAttachments = {};
  renderDiagAttachmentButtons();
  var box=document.getElementById('price-calc-box'); if(box) box.style.display='none';
  var ca=document.getElementById('code-article-text'); if(ca) ca.textContent='Remplis les champs...';
  var mr=document.getElementById('market-result'); if(mr) mr.innerHTML='';
  document.getElementById('d-date').value=new Date().toISOString().split('T')[0];
}

function saveDiagToParc() {
  if (!dv('d-model')) { alert('Remplis au moins le nom du modele'); return; }
  var pc = buildDiagData();
  pc.diagAttachments = JSON.parse(JSON.stringify(diagAttachments));
  parc.unshift(pc);
  saveParc(); updateCount();
  // Sync API
  if (typeof apiSavePC !== 'undefined') {
    apiSavePC(pc).then(function(ok){ toast(ok?'PC synchronise !':'PC cree (hors ligne)'); });
  }
  resetDiagForm();
  toast('PC ajoute au parc !');
  showTab('parc');
}

function printDiag() {
  var d = buildDiagData();
  var winRef = window.open('','_blank');
  winRef.document.write(buildDiagPrintHTML(d));
  winRef.document.close();
}

function buildDiagPrintHTML(d) {
  function cb(v){ return '<span style="display:inline-block;width:11px;height:11px;border:1px solid #555;border-radius:2px;vertical-align:middle;margin-right:4px;background:'+(v?'#0A3782':'#fff')+';"></span>'; }
  var hw = d.diag?d.diag.hw:{}, sys = d.diag?d.diag.sys:{};
  return '<!DOCTYPE html><html><head><meta charset="utf-8">'
    +'<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet">'
    +'<style>*{box-sizing:border-box;}body{font-family:Montserrat,Arial,sans-serif;font-size:10px;margin:10mm;color:#000;}'
    +'.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;}'
    +'.addr{font-size:8px;text-align:right;line-height:1.7;color:#555;}'
    +'.main-title{font-size:15px;font-weight:800;text-align:center;color:#0A3782;border-bottom:3px solid #0A3782;padding-bottom:6px;margin-bottom:10px;}'
    +'.section{font-size:11px;font-weight:700;color:#0A3782;background:#e8f0f5;padding:5px 10px;border-radius:4px;margin:10px 0 6px;}'
    +'.info-table{width:100%;border-collapse:collapse;margin-bottom:8px;}'
    +'.info-table td{padding:4px 8px;border:1px solid #ccc;font-size:10px;}'
    +'.info-table td:first-child{background:#f0f4f8;font-weight:700;width:120px;}'
    +'.cb-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-bottom:6px;}'
    +'.cb-item{font-size:10px;padding:2px 0;}</style></head><body>'
    +'<div class="header">'
    +'<div><strong>Franchisé LDLC SASU</strong><br>Lgpt Nice<br>19 rue maréchal Joffre, 06000 Nice<br>04 89 97 01 78<br>Siret : 840 258 016 00012</div>'
    +'<div class="addr">Technicien : '+d.tech+'<br>Date : '+d.date+'</div>'
    +'</div>'
    +'<div class="main-title">Diagnostic PC Reconditionnés</div>'
    +'<div class="section">Infos PC</div>'
    +'<table class="info-table">'
    +'<tr><td>N° de série</td><td>'+d.serial+'</td><td>Modèle</td><td>'+d.model+'</td></tr>'
    +'<tr><td>CPU</td><td>'+d.cpu+'</td><td>RAM</td><td>'+d.ram+'</td></tr>'
    +'<tr><td>SSD</td><td>'+d.ssd+'</td><td>GPU</td><td>'+(d.gpu||'—')+'</td></tr>'
    +'<tr><td>Écran</td><td>'+d.screen+'</td><td>OS</td><td>'+d.os+'</td></tr>'
    +'<tr><td>Prix TTC</td><td>'+(d.price||'—')+'€</td><td>Achat HT</td><td>'+(d.prixAchat||'—')+'€</td></tr>'
    +'<tr><td>Vente HT</td><td>'+(d.venteHT||'—')+'€</td><td>Marge HT</td><td>'+(d.marge||'—')+'€</td></tr>'
    +(d.diag&&d.diag.hw&&d.diag.hw.batterieNiveau?'<tr><td>Batterie</td><td colspan="3">'+(d.diag.hw.batterieNiveau)+'</td></tr>':'')
    +(d.diag&&d.diag.hw&&d.diag.hw.tempVal?'<tr><td>Température</td><td colspan="3">'+(d.diag.hw.tempVal)+'</td></tr>':'')
    +(d.diag&&d.diag.hw&&d.diag.hw.plasturgieEtat?'<tr><td>Plasturgie</td><td colspan="3">'+(d.diag.hw.plasturgieEtat)+'</td></tr>':'')
    +'</table>'
    +'<div class="section">Diag Hardware</div>'
    +'<div class="cb-grid">'
    +[['memtest','Memtest → Photo'],['smart','S.M.A.R.T Life'],['screenshot','Copie d\\'écran'],['firmware','Firmware'],['bios','Bios version'],['pile','Pile Bios'],['depoussierage','Dépoussiérage'],['thermique','Entretien thermique'],['temp','Température CPU/GPU'],['batterie','Batterie testée'],['plasturgie','État plasturgie']].map(function(x){ return '<div class="cb-item">'+cb(hw[x[0]])+x[1]+'</div>'; }).join('')
    +'</div>'
    +(hw.obs?'<p><em>'+hw.obs+'</em></p>':'')
    +'<div class="section">Diag Système</div>'
    +'<div class="cb-grid">'
    +[['premier','1ère mise en service'],['demarrage','Démarrage rapide désactivé'],['pilotes','Vérif. pilotes'],['alim','Vérif. alimentation'],['antivirus','Antivirus & Firewall'],['logiciels','Logiciels installés'],['nettoyage','Nettoyage disque'],['activation','Activation Windows']].map(function(x){ return '<div class="cb-item">'+cb(sys[x[0]])+x[1]+'</div>'; }).join('')
    +'</div>'
    +(sys.logList?'<p>Logiciels : '+sys.logList+'</p>':'')
    +(sys.obs?'<p><em>'+sys.obs+'</em></p>':'')
    +'<div class="section">Verdict</div>'
    +'<p style="font-size:12px;font-weight:700;color:'+(d.status==='vente'?'#16a34a':d.status==='atelier'?'#d97706':'#7c3aed')+'">'
    +(d.status==='vente'?'✅ Machine terminée — En vente':d.status==='atelier'?'❌ Problème — À l\\'atelier':'🔒 Réservée')
    +'</p>'
    +'<div style="margin-top:20px;font-size:10px;">Machine terminée le : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Initiales : &nbsp;&nbsp;&nbsp;&nbsp;</div>'
    +'<scr'+'ipt>window.onload=function(){window.print();};<'+'/scr'+'ipt></body></html>';
}

// ══ GÉNÉRATEUR MANUEL ══
function setType(t, el) {
  currentType=t;
  document.querySelectorAll('.tt').forEach(function(e){e.classList.remove('active');});
  if(el) el.classList.add('active');
  var lbl=document.getElementById('spec4-lbl'),inp=document.getElementById('f-spec4');
  var w=document.getElementById('spec4-wrap'),gw=document.getElementById('gpu-wrap');
  if(t==='tour_no_gpu'){w.style.display='none';gw.style.display='none';}
  else if(t==='laptop_gpu'){w.style.display='';lbl.textContent='Écran';inp.placeholder='Écran 15"';gw.style.display='';}
  else if(t==='tour_gpu'){w.style.display='';lbl.textContent='GPU';inp.placeholder='GTX 1050 Ti';gw.style.display='none';}
  else{w.style.display='';lbl.textContent='Écran';inp.placeholder='Écran 15"';gw.style.display='none';}
  upd();
}

function loadImg(input){
  var file=input.files[0]; if(!file) return;
  var r=new FileReader();
  r.onload=function(e){productImg=e.target.result;document.getElementById('img-prev').innerHTML='<img src="'+productImg+'" style="max-height:50px;max-width:100%;object-fit:contain;">';upd();};
  r.readAsDataURL(file);
}

function v(id){var el=document.getElementById(id);return el?el.value:'';}

function getSpecs(){
  var specs=[{key:'cpu',val:v('f-cpu')||'—'},{key:'ram',val:v('f-ram')||'—'},{key:'ssd',val:v('f-ssd')||'—'}];
  var s4=v('f-spec4');
  if(currentType==='laptop_gpu'){if(s4)specs.push({key:'screen',val:s4});var g=v('f-gpu');if(g)specs.push({key:'gpu',val:g});}
  else if(currentType!=='tour_no_gpu'&&s4)specs.push({key:currentType==='tour_gpu'?'gpu':'screen',val:s4});
  return specs;
}

function upd(){
  var el=document.getElementById('label-render');
  if(!v('f-model')){el.innerHTML='<div style="width:320px;height:453px;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px;background:#fff;border-radius:8px;border:2px dashed #dde2ec;">Remplis le formulaire</div>';return;}
  el.innerHTML=buildLabelHTML({model:v('f-model'),ref:v('f-ref'),serial:v('f-serial'),price:v('f-price'),os:v('f-os'),img:productImg,specs:getSpecs()});
}

function exportPNG(){
  var el=document.getElementById('label-render');
  if(!v('f-model')){alert('Remplis au moins le modele');return;}
  toast('Export en cours...');
  html2canvas(el,{scale:8,useCORS:true,backgroundColor:'#ffffff',logging:false}).then(function(canvas){
    var a=document.createElement('a');
    a.download=(v('f-model')||'etiquette').replace(/\\s+/g,'_')+'_'+(v('f-serial')||'')+'.png';
    a.href=canvas.toDataURL('image/png');a.click();toast('PNG exporte !');
  });
}

function printLabel(){
  if(!v('f-model')){alert('Remplis au moins le modele');return;}
  doPrintLabel(document.getElementById('label-render').innerHTML);
}

function saveToParc(){
  if(!v('f-model')){alert('Remplis au moins le modele');return;}
  var ttc=parseFloat(v('f-price'))||0, achat=0;
  parc.unshift({id:Date.now(),type:currentType,model:v('f-model'),ref:v('f-ref'),serial:v('f-serial'),price:v('f-price'),prixAchat:achat,venteHT:ttc?(ttc/1.2).toFixed(2):0,marge:0,os:v('f-os'),status:v('f-status'),img:productImg,specs:getSpecs(),date:new Date().toLocaleDateString('fr-FR'),tech:currentUser?currentUser.name:'',notes:'',docs:[],diag:null});
  saveParc();updateCount();toast('PC ajoute au parc !');
}

// ══ PARC ══
function saveParc(){localStorage.setItem('ldlc_parc',JSON.stringify(parc));}

function buildAttachPreview(attachments) {
  var html = '';
  var keys = Object.keys(attachments||{});
  var total = keys.reduce(function(s,k){return s+(attachments[k]?attachments[k].length:0);},0);
  if(!total) return '';
  html += '<div style="margin-top:10px;padding-top:8px;border-top:1px solid #e8eaed;">';
  html += '<div style="font-size:10px;font-weight:700;color:#555;margin-bottom:6px;">Pieces jointes ('+total+')</div>';
  html += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
  keys.forEach(function(k){
    var files = attachments[k]||[];
    files.forEach(function(f){
      if(f.type && f.type.startsWith('image/')){
        html += '<img src="'+f.data+'" style="width:50px;height:50px;object-fit:cover;border-radius:5px;border:1px solid #e0e4ee;cursor:pointer;" title="'+f.name+'">';
      } else {
        html += '<div style="background:#f0f4fb;border:1px solid #c5d5f0;border-radius:5px;padding:4px 8px;font-size:9px;font-weight:600;color:#0A3782;">'+f.name.substring(0,15)+'</div>';
      }
    });
  });
  html += '</div></div>';
  return html;
}
function updateCount(){document.getElementById('parc-count').textContent=parc.length;}

var STATUS_LABEL={vente:'En vente',amv:'A mettre en vente',atelier:'A l\\'atelier',reserve:'Reserve',vendu:'Vendu'};
var STATUS_CLASS={vente:'s-vente',amv:'s-amv',atelier:'s-atelier',reserve:'s-reserve',vendu:'s-vendu'};

function setFilter(f,el){
  filterState=f;
  document.querySelectorAll('.filter-btn').forEach(function(b){b.classList.remove('active');});
  el.classList.add('active');
  renderParc();
}

function renderParc(){
  var list=filterState==='all'?parc:parc.filter(function(p){return p.status===filterState;});

  // Stats
  var stats=document.getElementById('parc-stats');
  var counts={vente:0,atelier:0,reserve:0,vendu:0,total:parc.length};
  parc.forEach(function(p){if(counts[p.status]!==undefined)counts[p.status]++;});
  stats.innerHTML=[
    {label:'Total',val:counts.total,color:'var(--blue)',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'},
    {label:'En vente',val:counts.vente,color:'var(--green)',icon:'<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="10" fill="#16a34a"/></svg>'},
    {label:'Atelier',val:counts.atelier,color:'var(--orange)',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" width="22" height="22"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>'},
    {label:'Réservés',val:counts.reserve,color:'var(--purple)',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" width="22" height="22"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>'},
    {label:'Vendus',val:counts.vendu,color:'var(--red)',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" width="22" height="22"><polyline points="20 6 9 17 4 12"/></svg>'}
  ].map(function(s){
    return '<div class="stat-card"><span style="font-size:22px;">'+s.icon+'</span><div><div class="stat-num" style="color:'+s.color+'">'+s.val+'</div><div class="stat-label">'+s.label+'</div></div></div>';
  }).join('');

  var grid=document.getElementById('parc-grid');
  if(!list.length){
    grid.innerHTML='<div class="empty-state"><div class="empty-icon">💻</div><div style="font-size:14px;font-weight:600;">Aucun PC</div></div>';
    return;
  }

  grid.innerHTML=list.map(function(pc){
    var specTags=(pc.specs||[]).map(function(s){return '<span class="pc-spec-tag">'+s.val.replace(/\\n/g,' ')+'</span>';}).join('');
    var docCount=(pc.docs||[]).length;
    var hasDiag=!!pc.diag;
    var venteHT=pc.venteHT||(pc.price?(pc.price/1.2).toFixed(2):0);
    var marge=pc.marge||(pc.prixAchat&&venteHT?(venteHT-pc.prixAchat).toFixed(2):null);
    var margeHTML='';
    if(pc.prixAchat||pc.price){
      var margeNum=parseFloat(marge)||0;
      margeHTML='<div class="pc-margin-box">'
        +(pc.prixAchat?'<div class="pc-margin-item">Achat HT<br><span class="pc-margin-val">'+parseFloat(pc.prixAchat).toFixed(2)+'€</span></div>':'')
        +(venteHT?'<div class="pc-margin-item">Vente HT<br><span class="pc-margin-val">'+parseFloat(venteHT).toFixed(2)+'€</span></div>':'')
        +(marge!==null?'<div class="pc-margin-item">Marge HT<br><span class="pc-margin-val '+(margeNum>=0?'':'pc-margin-neg')+'">'+margeNum.toFixed(2)+'€</span></div>':'')
        +'</div>';
    }
    var docsHTML='';
    if(pc.docs&&pc.docs.length){
      docsHTML=pc.docs.slice(0,5).map(function(d){
        if(d.type==='image') return '<img class="doc-thumb" src="'+d.data+'" onclick="openLightbox(\\''+d.data+'\\')">';
        return '<div class="doc-pdf">PDF</div>';
      }).join('');
    }else{
      docsHTML='<span style="font-size:10px;color:#bbb;">Aucun document</span>';
    }

    return '<div class="pc-card">'
      +'<div class="pc-card-head">'
      +'<div><div class="pc-card-model">'+pc.model+'</div><div class="pc-card-ref">'+(pc.ref||pc.serial||'')+'</div></div>'
      +'<span class="pc-status-badge '+STATUS_CLASS[pc.status]+'">'+STATUS_LABEL[pc.status]+'</span>'
      +'</div>'
      +'<div class="pc-card-body">'
      +'<div class="pc-specs-row">'+specTags+'</div>'
      +'<div class="pc-price-row"><span class="pc-price">'+(pc.price||'—')+'</span><span class="pc-price-cents">€95</span></div>'
      +'<div class="pc-cv">'+(pc.serial||'Pas de CV')+'</div>'
      +margeHTML
      +(hasDiag?'<div style="font-size:9px;color:var(--green);margin-top:4px;font-weight:600;">✅ Diagnostic complet</div>':'')
      +(pc.tech?'<div style="font-size:9px;color:#aaa;margin-top:2px;">Tech: '+pc.tech+' · '+pc.date+'</div>':'')
      +'</div>'
      +'<div class="pc-card-docs">'
      +'<div class="pc-docs-title">📁 Docs ('+docCount+')<button class="btn btn-outline btn-sm" style="font-size:9px;padding:3px 7px;" onclick="openQR('+pc.id+')">QR</button></div>'
      +'<div class="pc-docs-grid">'+docsHTML+'</div>'
      +'</div>'
      +'<div class="pc-card-footer">'
      +'<select class="btn btn-sm" style="font-size:10px;padding:4px 6px;border:1px solid var(--border);border-radius:7px;" onchange="changeStatus('+pc.id+',this.value)">'
      +'<option value="vente"'+(pc.status==='vente'?' selected':'')+'>En vente</option>'
      +'<option value="atelier"'+(pc.status==='atelier'?' selected':'')+'>Atelier</option>'
      +'<option value="reserve"'+(pc.status==='reserve'?' selected':'')+'>Réservé</option>'
      +'<option value="vendu"'+(pc.status==='vendu'?' selected':'')+'>Vendu</option>'
      +'</select>'
      +'<button class="btn btn-warning btn-sm" onclick="openLabelPreview('+pc.id+')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/></svg></button>'
      +'<button class="btn btn-outline btn-sm" onclick="editPC('+pc.id+')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>'
      +'<button class="btn btn-purple btn-sm" title="Diagnostic" onclick="openDiagModal('+pc.id+')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg></button>'
      +'<button class="btn btn-primary btn-sm" onclick="rePrintPC('+pc.id+')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg></button>'
      +'<button class="btn btn-danger btn-sm" onclick="deletePC('+pc.id+')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg></button>'
      +'</div></div>';
  }).join('');
}

// ══ PARC ACTIONS ══
function changeStatus(id,status){var pc=parc.find(function(p){return p.id===id;});if(pc){pc.status=status;saveParc();renderParc();toast('Statut mis a jour');}}
function deletePC(id){if(!confirm('Supprimer ce PC ?'))return;parc=parc.filter(function(p){return p.id!==id;});saveParc();updateCount();renderParc();toast('PC supprime');}

function editPC(id){
  var pc=parc.find(function(p){return p.id===id;});if(!pc)return;
  editImgData=pc.img||null;
  document.getElementById('edit-id').value=id;
  document.getElementById('edit-model').value=pc.model||'';
  document.getElementById('edit-ref').value=pc.ref||'';
  document.getElementById('edit-serial').value=pc.serial||'';
  document.getElementById('edit-price').value=pc.price||'';
  document.getElementById('edit-prix-achat').value=pc.prixAchat||'';
  document.getElementById('edit-status').value=pc.status||'vente';
  document.getElementById('edit-os').value=pc.os||'WINDOWS 11 INSTALLÉ';
  document.getElementById('edit-notes').value=pc.notes||'';
  var specs=pc.specs||[];
  var gv=function(k){var s=specs.find(function(x){return x.key===k;});return s?s.val:'';};
  document.getElementById('edit-cpu').value=pc.cpu||gv('cpu');
  document.getElementById('edit-ram').value=pc.ram||gv('ram');
  document.getElementById('edit-ssd').value=pc.ssd||gv('ssd');
  document.getElementById('edit-screen').value=pc.screen||gv('screen');
  document.getElementById('edit-gpu').value=pc.gpu||gv('gpu');
  document.getElementById('edit-img-prev').innerHTML=editImgData
    ?'<img src="'+editImgData+'" style="max-height:52px;max-width:100%;object-fit:contain;">'
    :'<span class="upa-hint">Changer la photo</span>';
  calcEditPrices();
  document.getElementById('edit-modal').style.display='flex';
}

function editLoadImg(input){
  var file=input.files[0];if(!file)return;
  var r=new FileReader();
  r.onload=function(e){editImgData=e.target.result;document.getElementById('edit-img-prev').innerHTML='<img src="'+editImgData+'" style="max-height:52px;max-width:100%;object-fit:contain;">';};
  r.readAsDataURL(file);
}

function buildEditSpecs(){
  var specs=[{key:'cpu',val:document.getElementById('edit-cpu').value||'—'},{key:'ram',val:document.getElementById('edit-ram').value||'—'},{key:'ssd',val:document.getElementById('edit-ssd').value||'—'}];
  var sc=document.getElementById('edit-screen').value, gpu=document.getElementById('edit-gpu').value;
  if(sc)specs.push({key:'screen',val:sc});
  if(gpu)specs.push({key:'gpu',val:gpu});
  return specs;
}

function saveEdit(){
  var id=parseInt(document.getElementById('edit-id').value);
  var pc=parc.find(function(p){return p.id===id;});if(!pc)return;
  var ttc=parseFloat(document.getElementById('edit-price').value)||0;
  var achat=parseFloat(document.getElementById('edit-prix-achat').value)||0;
  pc.model=document.getElementById('edit-model').value;
  pc.ref=document.getElementById('edit-ref').value;
  pc.serial=document.getElementById('edit-serial').value;
  pc.price=document.getElementById('edit-price').value;
  pc.prixAchat=achat||null;
  pc.venteHT=ttc?(ttc/1.2).toFixed(2):0;
  pc.marge=(achat&&ttc)?((ttc/1.2)-achat).toFixed(2):null;
  pc.status=document.getElementById('edit-status').value;
  pc.os=document.getElementById('edit-os').value;
  pc.notes=document.getElementById('edit-notes').value;
  pc.img=editImgData;
  pc.cpu=document.getElementById('edit-cpu').value;
  pc.ram=document.getElementById('edit-ram').value;
  pc.ssd=document.getElementById('edit-ssd').value;
  pc.screen=document.getElementById('edit-screen').value;
  pc.gpu=document.getElementById('edit-gpu').value;
  pc.specs=buildEditSpecs();
  saveParc();closeModal('edit-modal');renderParc();toast('Modifications enregistrees !');
}

function editPrintLabel(){
  var lbl=buildLabelHTML({model:document.getElementById('edit-model').value,ref:document.getElementById('edit-ref').value,serial:document.getElementById('edit-serial').value,price:document.getElementById('edit-price').value,os:document.getElementById('edit-os').value,img:editImgData,specs:buildEditSpecs()});
  doPrintLabel(lbl);
}

function viewDiagFromEdit(){
  var id=parseInt(document.getElementById('edit-id').value);
  closeModal('edit-modal');
  setTimeout(function(){viewDiag(id);},200);
}

function viewDiag(id){
  var pc=parc.find(function(p){return p.id===id;});
  if(!pc||!pc.diag){toast('Aucun diagnostic disponible');return;}
  viewingDiagPcId=id;
  document.getElementById('diag-view-content').innerHTML=buildDiagViewHTML(pc);
  document.getElementById('diag-view-modal').style.display='flex';
}

function openDiagModal(id) {
  var pc=parc.find(function(p){return p.id===id;});
  if(!pc) return;
  if(pc.diag) {
    // Has existing diag - show view with edit option
    viewingDiagPcId = id;
    document.getElementById('diag-view-content').innerHTML = buildDiagViewHTML(pc);
    document.getElementById('diag-view-modal').style.display = 'flex';
  } else {
    // No diag yet - open edit modal directly
    viewingDiagPcId = id;
    editDiagById();
  }
}

function buildDiagViewHTML(pc){
  var d=pc.diag;
  var hw=d?d.hw:{}, sys=d?d.sys:{};
  function tag(val,label){return '<span class="diag-check-tag '+(val?'diag-check-ok':'diag-check-ko')+'">'+label+'</span>';}
  return '<div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px;">'
    +'<div style="background:#f0f4f8;border-radius:7px;padding:10px;">'
    +'<div style="font-size:10px;font-weight:700;color:var(--blue);margin-bottom:6px;">Infos PC</div>'
    +'<div style="font-size:11px;line-height:1.8;">'
    +'<strong>Modèle:</strong> '+pc.model+'<br>'
    +'<strong>CPU:</strong> '+pc.cpu+'<br>'
    +'<strong>RAM:</strong> '+pc.ram+'<br>'
    +'<strong>SSD:</strong> '+pc.ssd+'<br>'
    +(pc.screen?'<strong>Écran:</strong> '+pc.screen+'<br>':'')
    +(pc.gpu?'<strong>GPU:</strong> '+pc.gpu+'<br>':'')
    +'<strong>OS:</strong> '+pc.os
    +'</div></div>'
    +'<div style="background:#f0f4f8;border-radius:7px;padding:10px;">'
    +'<div style="font-size:10px;font-weight:700;color:var(--blue);margin-bottom:6px;">Prix</div>'
    +'<div style="font-size:11px;line-height:1.8;">'
    +'<strong>Vente TTC:</strong> '+(pc.price||'—')+'€<br>'
    +'<strong>Achat HT:</strong> '+(pc.prixAchat||'—')+'€<br>'
    +'<strong>Vente HT:</strong> '+(pc.venteHT||'—')+'€<br>'
    +'<strong>Marge HT:</strong> '+(pc.marge||'—')+'€'
    +'</div></div>'
    +'</div>'
    +'<div class="diag-view-section">'
    +'<div class="diag-view-section-title">🔧 Hardware</div>'
    +'<div class="diag-check-row">'
    +tag(hw.memtest,'Memtest')+tag(hw.smart,'SMART')+tag(hw.screenshot,'Screenshot')+tag(hw.firmware,'Firmware')
    +tag(hw.bios,'Bios')+tag(hw.pile,'Pile')+tag(hw.depoussierage,'Dépoussiérage')+tag(hw.thermique,'Thermique')
    +tag(hw.temp,'Température')+tag(hw.batterie,'Batterie')+tag(hw.plasturgie,'Plasturgie')
    +'</div>'
    +(hw.obs?'<div style="font-size:10px;color:#666;margin-top:4px;font-style:italic;">'+hw.obs+'</div>':'')
    +'</div>'
    +'<div class="diag-view-section">'
    +'<div class="diag-view-section-title">🖥️ Système</div>'
    +'<div class="diag-check-row">'
    +tag(sys.premier,'1ère MES')+tag(sys.demarrage,'Démarrage')+tag(sys.pilotes,'Pilotes')
    +tag(sys.alim,'Alimentation')+tag(sys.antivirus,'Antivirus')+tag(sys.logiciels,'Logiciels')
    +tag(sys.nettoyage,'Nettoyage')+tag(sys.activation,'Activation')
    +'</div>'
    +(sys.logList?'<div style="font-size:10px;color:#666;margin-top:4px;">Logiciels : '+sys.logList+'</div>':'')
    +(sys.obs?'<div style="font-size:10px;color:#666;margin-top:4px;font-style:italic;">'+sys.obs+'</div>':'')
    +'</div>'
    +'<div style="font-size:11px;font-weight:700;color:'+(pc.status==='vente'?'var(--green)':'var(--orange)')+';">Verdict : '+STATUS_LABEL[pc.status]+'</div>'
    +'</div>';
}

function printDiagById(){
  var pc=parc.find(function(p){return p.id===viewingDiagPcId;});
  if(!pc)return;
  var win=window.open('','_blank');
  win.document.write(buildDiagPrintHTML(pc));
  win.document.close();
}

function exportDiagPDF(){
  var pc=parc.find(function(p){return p.id===viewingDiagPcId;});
  if(!pc)return;
  var win=window.open('','_blank');
  win.document.write(buildDiagPrintHTML(pc));
  win.document.close();
  toast('Ouvert dans une nouvelle fenetre - utilise Ctrl+P pour sauvegarder en PDF');
}

function rePrintPC(id){
  var pc=parc.find(function(p){return p.id===id;});if(!pc)return;
  // Créer un div temporaire hors écran, générer le label, exporter PNG
  var tmp=document.createElement('div');
  tmp.style.cssText='position:fixed;left:-9999px;top:0;width:320px;height:453px;background:#fff;';
  tmp.innerHTML=buildLabelHTML({model:pc.model,ref:pc.ref,serial:pc.serial,price:pc.price,os:pc.os,img:pc.img,specs:pc.specs||[]});
  document.body.appendChild(tmp);
  html2canvas(tmp,{scale:8,useCORS:true,backgroundColor:'#ffffff',logging:false}).then(function(canvas){
    var a=document.createElement('a');
    a.download=(pc.model||'etiquette').replace(/\\s+/g,'_')+'_'+(pc.serial||'')+'.png';
    a.href=canvas.toDataURL('image/png');
    a.click();
    document.body.removeChild(tmp);
    toast('PNG téléchargé !');
  });
}

function openLabelPreview(id){
  var pc=parc.find(function(p){return p.id===id;});if(!pc)return;
  document.getElementById('f-model').value=pc.model||'';
  document.getElementById('f-ref').value=pc.ref||'';
  document.getElementById('f-serial').value=pc.serial||'';
  document.getElementById('f-price').value=pc.price||'';
  var osEl=document.getElementById('f-os');
  for(var i=0;i<osEl.options.length;i++){if(osEl.options[i].value===pc.os){osEl.selectedIndex=i;break;}}
  var specs=pc.specs||[];
  var gv=function(k){var s=specs.find(function(x){return x.key===k;});return s?s.val:'';};
  document.getElementById('f-cpu').value=pc.cpu||gv('cpu');
  document.getElementById('f-ram').value=pc.ram||gv('ram');
  document.getElementById('f-ssd').value=pc.ssd||gv('ssd');
  document.getElementById('f-spec4').value=pc.screen||gv('screen');
  if(document.getElementById('f-gpu'))document.getElementById('f-gpu').value=pc.gpu||gv('gpu');
  productImg=pc.img||null;
  if(productImg){document.getElementById('img-prev').innerHTML='<img src="'+productImg+'" style="max-height:50px;max-width:100%;object-fit:contain;">';}
  else{document.getElementById('img-prev').innerHTML='<span class="upa-hint">Cliquer pour uploader</span>';}
  var hasGpu=!!(pc.gpu||gv('gpu'));
  var isTour=pc.type==='tour_gpu'||pc.type==='tour_no_gpu';
  var t=isTour?(hasGpu?'tour_gpu':'tour_no_gpu'):(hasGpu?'laptop_gpu':'laptop_no_gpu');
  currentType=t;
  document.querySelectorAll('.tt').forEach(function(el){el.classList.remove('active');});
  var ttMap={laptop_no_gpu:0,laptop_gpu:1,tour_gpu:2,tour_no_gpu:3};
  var tabs=document.querySelectorAll('.tt');
  if(tabs[ttMap[t]])tabs[ttMap[t]].classList.add('active');
  setType(t,tabs[ttMap[t]]||tabs[0]);
  showTab('gen');
  window.scrollTo(0,0);
  toast('Etiquette chargee !');
}

// ══ QR ══
function openQR(id){
  currentQRPcId=id;
  var pc=parc.find(function(p){return p.id===id;});if(!pc)return;
  var div=document.getElementById('qr-code-div');
  div.innerHTML='';
  var url=window.location.href.split('#')[0]+'#upload/'+id;
  new QRCode(div,{text:url,width:200,height:200,colorDark:'#0A3782',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H});
  document.getElementById('qr-pc-name').textContent=pc.model+' — '+(pc.serial||'');
  updateQRDocsList(pc);
  document.getElementById('qr-modal').style.display='flex';
}

function updateQRDocsList(pc){
  var list=document.getElementById('qr-docs-list');
  if(!pc.docs||!pc.docs.length){list.innerHTML='<div style="font-size:10px;color:#bbb;text-align:center;">Aucun document</div>';return;}
  list.innerHTML='<div style="font-size:10px;font-weight:600;color:var(--muted);margin-top:8px;">'+pc.docs.length+' document(s)</div>';
}

function addDocFromInput(input){
  var id=currentQRPcId;if(!id)return;
  var pc=parc.find(function(p){return p.id===id;});if(!pc)return;
  if(!pc.docs)pc.docs=[];
  var files=Array.from(input.files);
  var n=0;
  files.forEach(function(file){
    var r=new FileReader();
    r.onload=function(e){
      var isImg=file.type.startsWith('image/');
      pc.docs.push({name:file.name,type:isImg?'image':'pdf',data:e.target.result});
      n++;
      if(n===files.length){saveParc();renderParc();updateQRDocsList(pc);toast(n+' doc(s) ajoute(s) !');}
    };
    r.readAsDataURL(file);
  });
  input.value='';
}

// ══ MODALS ══
function closeModal(id){document.getElementById(id).style.display='none';}
function openLightbox(src){document.getElementById('lightbox-img').src=src;document.getElementById('lightbox').style.display='flex';}
function closeLightbox(){document.getElementById('lightbox').style.display='none';}

// ══ TOAST ══
function toast(msg){var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2500);}

// ══ HASH ROUTER ══
function checkHash(){
  var hash=window.location.hash;
  if(hash.startsWith('#upload/')){
    var pcId=parseInt(hash.replace('#upload/',''));
    showUploadPage(pcId);
    return;
  }
}

function showUploadPage(pcId) {
  // Show upload UI without requiring login
  document.body.innerHTML = [
    '<div style="font-family:Montserrat,Arial,sans-serif;max-width:440px;margin:0 auto;padding:20px;min-height:100vh;background:#f4f5f7;">',
    '<div style="background:#0A3782;border-radius:10px;padding:14px;margin-bottom:20px;text-align:center;">',
    '<img src="'+L_HEADER+'" style="height:38px;width:auto;">',
    '</div>',
    '<h2 style="color:#0A3782;margin-bottom:6px;font-size:17px;font-weight:800;">Upload documents</h2>',
    '<div id="up-pc-info" style="color:#555;font-size:12px;margin-bottom:16px;font-weight:600;">Chargement...</div>',
    '<label style="display:block;background:#0A3782;color:#fff;padding:14px;border-radius:9px;font-weight:700;font-size:14px;cursor:pointer;margin-bottom:8px;text-align:center;">',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>Choisir photos / PDF',
    '<input type="file" accept="image/*,.pdf,.doc,.docx" multiple style="display:none;" onchange="doUpload(this)">',
    '</label>',
    '<label style="display:block;background:#0096C8;color:#fff;padding:12px;border-radius:9px;font-weight:700;font-size:13px;cursor:pointer;text-align:center;margin-bottom:16px;">',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="vertical-align:-3px;margin-right:6px;"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>Prendre une photo',
    '<input type="file" accept="image/*" capture="environment" style="display:none;" onchange="doUpload(this)">',
    '</label>',
    '<div id="up-preview" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:12px;"></div>',
    '<div id="up-status" style="font-size:13px;font-weight:700;text-align:center;color:#16a34a;min-height:20px;"></div>',
    '</div>'
  ].join('');

  // Load PC info from API
  fetch('/api/parc').then(function(r){return r.json();}).then(function(parc){
    var pc = parc.find(function(p){return p.id==pcId;});
    document.getElementById('up-pc-info').textContent = pc ? (pc.model + (pc.ref?' — '+pc.ref:'')) : 'PC #'+pcId;
    window._uploadPc = pc;
    window._uploadParc = parc;
  }).catch(function(){
    document.getElementById('up-pc-info').textContent = 'PC #'+pcId;
    window._uploadParc = [];
  });

  window._uploadPcId = pcId;

  window.doUpload = function(input) {
    var files = Array.from(input.files);
    var prev = document.getElementById('up-preview');
    var status = document.getElementById('up-status');
    status.style.color = '#d97706'; status.textContent = 'Envoi en cours...';
    var done = 0;
    var newDocs = [];
    files.forEach(function(file){
      var reader = new FileReader();
      reader.onload = function(e){
        var isImg = file.type.startsWith('image/');
        newDocs.push({name:file.name, type:isImg?'image':'pdf', data:e.target.result});
        if(isImg){
          var img=document.createElement('img');
          img.src=e.target.result;
          img.style='width:80px;height:80px;object-fit:cover;border-radius:6px;border:2px solid #16a34a;';
          prev.appendChild(img);
        } else {
          var d=document.createElement('div');
          d.style='background:#e8f0fb;border:1px solid #c5d5f0;border-radius:6px;padding:6px 10px;font-size:10px;font-weight:600;color:#0A3782;';
          d.textContent=file.name.substring(0,20);
          prev.appendChild(d);
        }
        done++;
        if(done===files.length){
          // Save to API
          var parc = window._uploadParc || [];
          var pc = parc.find(function(p){return p.id==window._uploadPcId;});
          if(pc){
            if(!pc.docs) pc.docs=[];
            newDocs.forEach(function(d){pc.docs.push(d);});
            fetch('/api/parc',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(pc)})
              .then(function(r){
                if(r.ok){ status.style.color='#16a34a'; status.textContent='OK '+done+' fichier(s) uploade(s) !'; }
                else { status.style.color='#dc2626'; status.textContent='Erreur serveur'; }
              })
              .catch(function(){ status.style.color='#dc2626'; status.textContent='Erreur reseau'; });
          } else {
            status.style.color='#dc2626'; status.textContent='PC introuvable';
          }
        }
      };
      reader.readAsDataURL(file);
    });
    input.value='';
  };
}


// ══ POST-RENDER PATCHES ══
// Add AMV verdict button dynamically
setTimeout(function() {
  var vok = document.getElementById('v-ok');
  if (vok && !document.getElementById('v-amv')) {
    var amvBtn = document.createElement('button');
    amvBtn.id = 'v-amv';
    amvBtn.className = 'verdict-btn';
    amvBtn.setAttribute('style','font-size:10px;border:2px solid #d97706;color:#d97706;background:#fffbeb;border-radius:8px;padding:9px;cursor:pointer;font-family:Montserrat,Arial,sans-serif;font-weight:700;flex:1;');
    amvBtn.textContent = 'À mettre en vente';
    amvBtn.onclick = function(){ setVerdict('amv','amv'); };
    vok.parentNode.insertBefore(amvBtn, vok.nextSibling);
  }
  // Add amv to all status selects
  ['f-status','edit-status','de-status'].forEach(function(id) {
    var sel = document.getElementById(id);
    if (sel && !sel.querySelector('[value="amv"]')) {
      var opt = document.createElement('option');
      opt.value = 'amv'; opt.textContent = 'À mettre en vente';
      sel.insertBefore(opt, sel.firstChild);
    }
  });
}, 500);

// Tooltip via JS (CSS ::after on data-tip)
document.addEventListener('mouseover', function(e) {
  var btn = e.target.closest('[data-tip]');
  if (!btn) return;
  var tip = btn._tipEl;
  if (!tip) {
    tip = document.createElement('div');
    tip.style.cssText = 'position:fixed;background:#1a1a2e;color:#fff;font-size:10px;font-weight:600;padding:5px 9px;border-radius:6px;white-space:nowrap;z-index:99999;pointer-events:none;font-family:Montserrat,Arial,sans-serif;transition:opacity .15s;';
    tip.textContent = btn.getAttribute('data-tip');
    document.body.appendChild(tip);
    btn._tipEl = tip;
  }
  var rect = btn.getBoundingClientRect();
  tip.style.left = (rect.left + rect.width/2 - tip.offsetWidth/2) + 'px';
  tip.style.top = (rect.top - tip.offsetHeight - 8) + 'px';
  tip.style.opacity = '1';
});
document.addEventListener('mouseout', function(e) {
  var btn = e.target.closest('[data-tip]');
  if (btn && btn._tipEl) btn._tipEl.style.opacity = '0';
});

// Add data-tip via renderParc patch
var _origRenderParc = renderParc;
renderParc = function() {
  _origRenderParc.apply(this, arguments);
  // Add tooltips to newly created buttons
  document.querySelectorAll('.btn-warning.btn-sm:not([data-tip])').forEach(function(b){ b.setAttribute('data-tip','Aperçu étiquette'); });
  document.querySelectorAll('.btn-outline.btn-sm:not([data-tip])').forEach(function(b){ if(b.onclick&&b.onclick.toString().includes('editPC')) b.setAttribute('data-tip','Modifier'); });
  document.querySelectorAll('.btn-purple.btn-sm:not([data-tip])').forEach(function(b){ b.setAttribute('data-tip','Diagnostic'); });
  document.querySelectorAll('.btn-primary.btn-sm:not([data-tip])').forEach(function(b){ b.setAttribute('data-tip','Télécharger PNG'); });
  document.querySelectorAll('.btn-danger.btn-sm:not([data-tip])').forEach(function(b){ b.setAttribute('data-tip','Supprimer'); });
};

window.addEventListener('hashchange',checkHash);


// ══ CODE ARTICLE ══
function updateCodeArticle() {
  var model  = dv('d-model');
  var cpu    = dv('d-cpu');
  var ram    = dv('d-ram');
  var ssd    = dv('d-ssd');
  var gpu    = dv('d-gpu');
  var screen = dv('d-screen');
  var os     = dv('d-os');

  if (!model) {
    document.getElementById('code-article-text').textContent = 'Remplis les champs ci-dessus pour générer le code article...';
    return;
  }

  var parts = ['PC reconditionné ' + model];
  if (cpu)    parts.push(cpu);
  if (ram)    parts.push(ram);
  if (ssd)    parts.push(ssd);
  if (gpu)    parts.push(gpu);
  if (screen) parts.push(screen);
  if (os)     parts.push(os);

  var code = parts.join(' | ');
  document.getElementById('code-article-text').textContent = code;
}

function copyCodeArticle() {
  var text = document.getElementById('code-article-text').textContent;
  if (!text || text.startsWith('Remplis')) return;
  navigator.clipboard.writeText(text).then(function() {
    var el = document.getElementById('code-article-copied');
    el.textContent = '✓ Copié dans le presse-papier !';
    setTimeout(function(){ el.textContent = ''; }, 2000);
  });
}

// ══ ANALYSE MARCHÉ ══
function analyzeMarket() {
  var model = dv('d-model');
  if (!model) { alert('Remplis le nom du modele'); return; }
  var btn = document.getElementById('btn-analyze');
  var result = document.getElementById('market-result');
  btn.disabled = true;
  btn.textContent = 'Analyse en cours...';
  result.innerHTML = '<div style="text-align:center;padding:20px;color:var(--muted);font-size:12px;">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32" style="display:block;margin:0 auto 8px;animation:spin 1s linear infinite;"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>'
    + 'Analyse du marché en cours pour "' + model + '"...</div>';

  // Use Anthropic API to analyze market prices
  fetch('/api/market', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({model: model})
  })
  .then(function(r){ return r.json(); }) .then(function(data) {
    btn.disabled = false;
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Analyser le marché';
    try {
      var json = data;
      if (json.error) throw new Error(json.error);
      result.innerHTML = '<div style="background:linear-gradient(135deg,#f0f7ff,#e8f4fd);border:1px solid #bee3f8;border-radius:10px;padding:14px;">'
        + '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:10px;">'
        + '<div style="text-align:center;"><div style="font-size:10px;color:var(--muted);font-weight:600;margin-bottom:3px;">Fourchette min</div><div style="font-size:18px;font-weight:900;color:var(--green);">' + json.fourchette_min + '€</div></div>'
        + '<div style="text-align:center;border-left:1px solid #bee3f8;border-right:1px solid #bee3f8;"><div style="font-size:10px;color:var(--muted);font-weight:600;margin-bottom:3px;">Prix recommandé</div><div style="font-size:22px;font-weight:900;color:var(--blue);">' + json.prix_recommande + '€</div></div>'
        + '<div style="text-align:center;"><div style="font-size:10px;color:var(--muted);font-weight:600;margin-bottom:3px;">Fourchette max</div><div style="font-size:18px;font-weight:900;color:var(--orange);">' + json.fourchette_max + '€</div></div>'
        + '</div>'
        + '<div style="font-size:11px;color:#444;line-height:1.6;border-top:1px solid #bee3f8;padding-top:8px;">' + json.analyse + '</div>'
        + '<button onclick="applyRecommendedPrice(' + json.prix_recommande + ')" style="margin-top:8px;background:var(--blue);color:#fff;border:none;border-radius:6px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer;font-family:Montserrat,Arial,sans-serif;">Appliquer ce prix</button>'
        + '</div>';
    } catch(e) {
      result.innerHTML = '<div style="color:var(--red);font-size:11px;padding:8px;background:#fef2f2;border-radius:8px;">Erreur lors de l&#39;analyse. Reessaie.</div>';
    }
  })
  .catch(function() {
    btn.disabled = false;
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="vertical-align:-2px;margin-right:4px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Analyser le marché';
    result.innerHTML = '<div style="color:var(--red);font-size:11px;padding:8px;background:#fef2f2;border-radius:8px;">Erreur reseau.</div>';
  });
}

function applyRecommendedPrice(price) {
  document.getElementById('d-price').value = price;
  calcPrices();
  toast('Prix appliqué : ' + price + '€');
}

// ══ EDIT DIAG ══
function editDiagById() {
  var pc = parc.find(function(p){ return p.id === viewingDiagPcId; });
  if (!pc) return;
  closeModal('diag-view-modal');
  // Load diag fields
  setTimeout(function() {
    if (pc.diag && pc.diag.hw) {
      var hw = pc.diag.hw, sys = pc.diag.sys;
      // Hardware
      ['memtest','smart','screenshot','firmware','bios','pile','depoussierage','thermique','temp','batterie','plasturgie'].forEach(function(k){
        var el = document.getElementById('d-'+k); if(el) el.checked = !!hw[k];
      });
      setField('d-obs-hw', hw.obs||'');
      setField('d-batterie-niveau', hw.batterieNiveau||'');
      setField('d-temp-val', hw.tempVal||'');
      setField('d-bios-ver', hw.biosVer||'');
      setField('d-firmware-ver', hw.firmwareVer||'');
      setField('d-plasturgie-etat', hw.plasturgieEtat||'');
      // System
      ['1ere','demarrage','pilotes','alim','antivirus','logiciels','nettoyage','activation'].forEach(function(k){
        var el = document.getElementById('d-'+k); if(el) el.checked = !!(sys && sys[k.replace('1ere','premier')]);
      });
      var elPremier = document.getElementById('d-1ere'); if(elPremier) elPremier.checked = !!(sys && sys.premier);
      setField('d-logiciels-list', sys&&sys.logList||'');
      setField('d-obs-sys', sys&&sys.obs||'');
    }
    // Info PC
    setField('d-model',  pc.model||'');
    setField('d-ref',    pc.ref||'');
    setField('d-serial', pc.serial||'');
    setField('d-cpu',    pc.cpu||'');
    setField('d-ram',    pc.ram||'');
    setField('d-ssd',    pc.ssd||'');
    setField('d-gpu',    pc.gpu||'');
    setField('d-screen', pc.screen||'');
    setField('d-price',  pc.price||'');
    setField('d-prix-achat', pc.prixAchat||'');
    setField('d-tech',   pc.tech||'');
    var osEl = document.getElementById('d-os');
    if (osEl && pc.os) { for(var i=0;i<osEl.options.length;i++){if(osEl.options[i].value===pc.os){osEl.selectedIndex=i;break;}} }
    // Verdict
    var vm = {vente:'ok', atelier:'ko', reserve:'reserve'};
    setVerdict(pc.status, vm[pc.status]||'ok');
    // Store reference to edit this specific PC
    window._editingDiagPcId = pc.id;
    calcPrices();
    updateCodeArticle();
    showTab('diag');
    toast('Diagnostic charge. Modifie et recree le PC');
    window.scrollTo(0,0);
  }, 200);
}

function setField(id, val) {
  var el = document.getElementById(id);
  if (el) el.value = val;
}

// Auto-update code article when fields change
['d-model','d-cpu','d-ram','d-ssd','d-gpu','d-screen','d-os'].forEach(function(id) {
  var el = document.getElementById(id);
  if (el) el.addEventListener('input', updateCodeArticle);
  if (el) el.addEventListener('change', updateCodeArticle);
});

// Spin animation for loading
var styleEl = document.createElement('style');
styleEl.textContent = '@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}';
document.head.appendChild(styleEl);

// ══ API ══
async function apiLoadParc(){try{var r=await fetch('/api/parc');if(r.ok){parc=await r.json();localStorage.setItem('ldlc_parc',JSON.stringify(parc));updateCount();return true;}}catch(e){}return false;}
async function apiSavePC(pc){try{var r=await fetch('/api/parc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(pc)});if(r.ok){var s=await r.json();pc.id=s.id;return true;}}catch(e){}return false;}
async function apiUpdatePC(pc){try{var r=await fetch('/api/parc',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(pc)});return r.ok;}catch(e){return false;}}
async function apiDeletePC(id){try{var r=await fetch('/api/parc',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:id})});return r.ok;}catch(e){return false;}}
// ══ INIT ══
initLogin();
`;
export default function Home() {
  useEffect(() => {
    const style = document.createElement("style"); style.textContent = CSS; document.head.appendChild(style);
    const lnk = document.createElement("link"); lnk.rel="stylesheet"; lnk.href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"; document.head.appendChild(lnk);
    let loaded = 0;
    const onLoad = () => { loaded++; if(loaded===2){ const s=document.createElement("script"); s.textContent=APP_JS; document.body.appendChild(s); } };
    const s1=document.createElement("script"); s1.src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"; s1.onload=onLoad; document.head.appendChild(s1);
    const s2=document.createElement("script"); s2.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"; s2.onload=onLoad; document.head.appendChild(s2);
    return () => { try { document.head.removeChild(style); } catch(e){} };
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
