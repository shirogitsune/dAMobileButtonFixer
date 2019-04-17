document.addEventListener('DOMContentLoaded', function(evt){
var buttonUp = '{'+
  'background:none;'+
  'filter: none;'+
  'color: #000;'+
  'font-weight: bold;'+
  'font-size: 1.5em;'+
  'background-color: #CBCBCB;'+
  'width:40px;'+
  'height:40px;'+
  'display: flex;'+
  'flex-direction: column;'+
  'text-align: center;'+
  'justify-content: center;'+
  'border-radius: 5px;'+
'}';
var stylefix = document.createElement('style');
stylefix.setAttribute('type', 'text/css');
stylefix.setAttribute('id', 'dAMobileButtonFixStyles');
/* Stack Item Controls */
stylefix.insertAdjacentText('beforeend', '.messages div.mcbox span.mcx, .messages div.mcbox span.mcdx '+ buttonUp);
stylefix.insertAdjacentText('beforeend', '.messages div.mcbox span.mcx::after {content:"X";}');
stylefix.insertAdjacentText('beforeend', '.messages div.mcbox span.mcdx {left: 5px;}');
stylefix.insertAdjacentText('beforeend', '.messages div.mcbox span.mcdx::after {content:"\u25BC"; line-height: 40px;}');
/* Stack Notifications */
stylefix.insertAdjacentText('beforeend', '.messages div.mcbox div.mcbox-inner {min-height: 30px; margin: 15px 8px 2px 8px;}');
stylefix.insertAdjacentText('beforeend', '.messages .mczone-select-heybox {min-height: 30px; padding: 15px 8px 2px 8px;}');
/* Pagination Buttons */
stylefix.insertAdjacentText('beforeend', '.messages .mczone-footer-pagination a.pagelink, .messages .mczone-footer-pagination strong {padding: 10px;}');
stylefix.insertAdjacentText('beforeend', '.messages .mczone-footer-pagination a.prevlink, .messages .mczone-footer-pagination a.nextlink {padding: 10px 5px;}');
/* Action Buttons */
stylefix.insertAdjacentText('beforeend', '.messages .gmbutton {padding: 10px 5px; background-size: 100% 195%;}');
stylefix.insertAdjacentText('beforeend', '.messages .gmbuttonactive {background-size: 0%; background-color: #DFDFDF;}');
/* Pull the lever, Kronk! */
document.head.insertAdjacentElement('beforeend', stylefix);
});

