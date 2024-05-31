"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[40834],{628596:(e,l,t)=>{var o;t.r(l),t.d(l,{default:()=>i});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FollowButton_pin",selections:[{alias:null,args:null,concreteType:"Domain",kind:"LinkedField",name:"linkDomain",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"officialUser",plural:!1,selections:o=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nativeCreator",plural:!1,selections:o,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:o,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:o,storageKey:null}],type:"Pin",abstractKey:null};n.hash="cabaa35ed7d59dee006897bf3ef32e3d";let i=n},877457:(e,l,t)=>{t.d(l,{g:()=>a,t:()=>i});var o=t(667294);let n=(0,o.createContext)(null),i=n.Provider,a=()=>(0,o.useContext)(n)},454514:(e,l,t)=>{t.d(l,{UZ:()=>d,Vg:()=>r,ZP:()=>u});var o=t(667294),n=t(883119),i=t(554786),a=t(494125),s=t(785893);let r=200,d=({deviceType:e,hiding:l,visible:t})=>{let o="desktop"===e,n=0,i=o?"translateY(200px)":"translateY(-200px)",a="opacity 0.1s ease-in-out",s="hidden";return t&&!l&&(n=1,i="translateY(0)",a="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",s="visible"),t&&l&&(i="scale(1.1)",a="opacity transform 0.2s"),{opacity:n,pointerEvents:"auto",position:"relative",marginTop:o?10:0,transform:i,transition:a,visibility:s}};function u({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:l,text:t,primaryAction:u,dismissButton:c,helperLink:_,thumbnail:h,type:p,dataTestId:f,duration:m=2e3,onHide:g,href:x,onClick:w,openNewPage:y,imageUrl:b}){let v;let P=(0,i.ZP)(),[j,k]=(0,o.useState)(!1),[z,A]=(0,o.useState)(!1),T=(0,o.useRef)(),F=()=>{k(!0),T.current=setTimeout(g,r)},Z=()=>{T.current=setTimeout(F,m)},C=()=>{T.current&&clearTimeout(T.current)};(0,a.Z)(()=>(setTimeout(()=>A(!0),100),Z(),C)),b&&(v={image:(0,s.jsx)(n.Ee,{alt:"string"==typeof t?t:`${t[0]} ${t[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:b})});let S=(0,s.jsx)(n.FN,{_dangerouslySetPrimaryAction:l,_dangerouslySetThumbnail:e,dismissButton:c,helperLink:_,primaryAction:u,text:t,thumbnail:v??h,type:p}),{marginTop:L,opacity:E,pointerEvents:U,position:I,transform:D,transition:H,visibility:O}=d({deviceType:P,hiding:j,visible:z});return(0,s.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{transform:D,transition:H,visibility:O,pointerEvents:U}},"data-test-id":f??"toast",display:"flex",marginTop:L,onMouseEnter:C,onMouseLeave:Z,opacity:E,position:I,children:x?(0,s.jsx)(n.Tg,{href:x,onTap:({event:e,dangerouslyDisableOnNavigation:l})=>{x.startsWith("#")&&(e.preventDefault(),l()),w?.(e)},rounding:"pill",target:y?"blank":null,children:S}):S})}},205841:(e,l,t)=>{t.d(l,{qE:()=>s,u_:()=>r.ZP});var o=t(883119),n=t(785893);let i=(e,l)=>{let t=e?.includes("images/user/default");return!!(t&&l)};function a({accessibilityLabel:e,name:l,outline:t,size:a,src:s,verified:r}){return(0,n.jsx)(o.qE,{accessibilityLabel:e,name:l,outline:t,size:a,src:i(s,l)?void 0:s,verified:r})}a.displayName="Avatar";let s=a;var r=t(930837);t(454514)},241552:(e,l,t)=>{t.d(l,{l:()=>i,r:()=>a});var o=t(667294);let n=(0,o.createContext)(null),i=()=>(0,o.useContext)(n),a=n.Provider},48481:(e,l,t)=>{t.d(l,{Z:()=>i});var o=t(877457),n=t(241552);let i=()=>{let e=(0,o.g)(),l=(0,n.l)();return t=>{let{mobileOptions:o,desktopOptions:n,reason:i,attributionLabel:a,pinId:s}=t;e?e.showDesktopSignupModal({signupFlow:n?.modalType==="login"?{type:"login"}:{type:"signup"},reason:i,attributionLabel:a,...n?.modalOptions}):l&&l.showMobileSignupModal({reason:i,attributionLabel:a,headingType:o?.headingType,pinId:s})}}},873955:(e,l,t)=>{t.d(l,{Z:()=>i});var o=t(958881);let n=/\{\{\s*(\w+)\s*\}\}/g,i=(e,l)=>(0,o.Z)(n,e,l)},958881:(e,l,t)=>{t.d(l,{Z:()=>o});let o=(e,l,t)=>l?l.replace(e,(e,l)=>t&&Object.prototype.hasOwnProperty.call(t,l)?t[l]:""):""},623409:(e,l,t)=>{t.d(l,{Z:()=>r});var o=t(667294),n=t(616550),i=t(96157),a=t(217058);let s=e=>(0,i.L6)(e)?"pin":(0,i.am)(e)?"board":(0,i.Xn)(e)?"login":(0,i.C$)(e)?"home":(0,i.cD)(e)?"profile":(0,i.dr)(e)?"ideas":(0,i.gT)(e)?"ideas-root":(0,i.tZ)(e)?"videos":(0,i.Q0)(e)?"videos-category":(0,i.$Y)(e)?"article":(0,i.E0)(e)?"shopping-spotlight":(0,i.Zz)(e)?"today":(0,i.j8)(e)?"unauth-profile":(0,i.f1)(e)?"shopping-root":(0,i.OX)(e)?"shopping-category":"other";function r(){let e=(0,n.TH)();return(0,o.useCallback)(({action:l,item:t,within:o})=>{let n=s(e);(0,a.My)(`logged_out_product.interaction.${n}.${l}`,{item:t||"none",within:o||"none"})},[e])}},213503:(e,l,t)=>{t.d(l,{Z:()=>j}),t(167912);var o,n=t(883119),i=t(587703),a=t(207012),s=t(140017),r=t(340523),d=t(48481),u=t(217058),c=t(623409),_=t(13848),h=t(554786),p=t(494125),f=t(149722),m=t(735728),g=t(358589),x=t(386008),w=t(155087),y=t(155117),b=t(785893);let v=({children:e,pulsar:l,testId:t})=>l.show?(0,b.jsx)(n.xu,{"data-test-id":t,position:"relative",children:(0,b.jsxs)(n.iP,{onTap:l.onClick,tapStyle:"none",children:[(0,b.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},marginTop:-5,position:"absolute",children:e}),(0,b.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},marginTop:-12,position:"absolute",children:(0,b.jsx)(n.o3,{})})]})}):(0,b.jsx)(n.xu,{"data-test-id":t,children:e}),P=void 0!==o?o:o=t(628596);function j({auxData:e,disabled:l,disableLog:t,followEventType:o,id:j,inline:k,invertColors:z,isFollowed:A,isIdeaPin:T,isLegoEnabled:F,isSecondaryButton:Z,isUserFollowButton:C,isUserMe:S,onFollow:L,onUnfollow:E,pinKey:U,shouldUseLegoColors:I,showPulsar:D,size:H,textType:O="FollowFollowing",unfollowEventType:N,viewParameter:M,viewType:B,clientTrackingParams:W}){let K;let R=(0,s.ZP)(),G=(0,h.HG)(),{showToast:$}=(0,_.F9)(),Y=(0,c.Z)(),X=(0,i.Z)(),q=(0,d.Z)(),{checkExperiment:Q}=(0,r.F)(),V=(0,g.Z)(),J=(0,f.Z)(),ee=J&&J.isAuth,{unauthFollowUserId:el,setUnauthFollowUserId:et}=(0,y.f)(),eo=(0,x.mN)()(j),en=eo&&{imageMediumUrl:eo.image_medium_url,username:eo.username},ei=(0,a.Z)(P,U),ea=ei?.linkDomain,es=ei?.nativeCreator,er=ei?.originPinner,ed=ei?.pinner;K=es||(ea?ea.officialUser:er||ed);let eu=en??K;(0,p.Z)(()=>{!G&&ee&&el&&j&&el===j&&L(j)});let ec=V({fn:()=>{ee?A?(E(j),t||X({event_type:N,view_type:B,view_parameter:M,object_id_str:j,aux_data:e,clientTrackingParams:W})):(L(j),C&&$(({hideToast:e})=>{let l=eu?.username?`/${eu.username}/`:"";return(0,b.jsx)(w.Z,{handleHide:e,href:l,imageUrl:eu?.imageMediumUrl||"",text:R._('Following! Their created Pins will show up in your home feed!', 'followButton.follow.informationalToastText', 'Text explaining that a creator\'s Pins will show up in home feed after follow'),userId:j})}),t||X({event_type:o,view_type:B,view_parameter:M,object_id_str:j,aux_data:e,clientTrackingParams:W})):((0,u.NC)(A?"press_profile_unfollow":"press_profile_follow"),Y({action:"click",item:A?"unfollow-button":"follow-button"}),q({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:T?"click_idea_pin_follow":"click_follow",desktopOptions:{modalType:"signup",modalOptions:G&&Q("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!G&&Q("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),G||et(j??""),(0,u.NC)("clickthrough"))},modalHeader:(0,m.N4)({i18n:R,toFollow:!A})}),e_=!A&&!!D,eh=()=>{if(S)return R._('That\'s you!', 'Follow button is disabled because this is you', 'Follow button is disabled because this is you');if("AddRemove"===O)return A?R._('Remove', 'unfollowButton.removeText', 'Follow button label - followed state, so user can click to "remove" the follow'):R._('Add', 'followButton.addText', 'Follow button label - unfollowed state, so user can click to "add" the follow');let e="FollowUnfollow"===O?R._('Unfollow', 'unfollowButton.unfollowText', 'Follow button label - followed state, so user can click to "unfollow" the follow'):R._('Following', 'Follow button label - followed state', 'Follow button label - followed state');return A?e:R._('Follow', 'Follow button label - unfollowed state', 'Follow button label - unfollowed state')};return(0,b.jsx)(v,{pulsar:e_?{show:!0,onClick:ec}:{show:!1},testId:S||A?"board-unfollow-button":"board-follow-button",children:(0,b.jsx)(n.zx,{accessibilityLabel:eh(),color:I||"AddRemove"===O||!F&&Z||A?"gray":"red",disabled:S||l,fullWidth:k,onClick:e_?void 0:({event:l})=>{l.preventDefault(),l.stopPropagation(),t||X({event_type:101,component:13672,element:11951,object_id_str:j,view_type:B,view_parameter:M,aux_data:e,clientTrackingParams:W}),ec()},selected:z?!A:I&&A||!!A&&Z,size:H,text:eh()})})}},358589:(e,l,t)=>{t.d(l,{Z:()=>s});var o=t(140017),n=t(554786),i=t(166770),a=t(735728);let s=()=>{let e=(0,o.ZP)(),l=(0,n.HG)(),{viewer:t,loginForMore:s,limitedLoginModalSubheader:r,limitedLoginModalNextLocation:d}=(0,i.H)(),u="LIMITED_LOGIN"===t.type;return u?({modalHeader:t,nextLocation:o})=>n=>{let i=null;n&&(n.nativeEvent&&n.nativeEvent instanceof Event?i=n:n.event&&(i=n.event)),i&&(i.preventDefault&&i.preventDefault(),i.stopPropagation&&i.stopPropagation()),s?.setVisible(!0),r?.setText(t||(l?a.hr(e):a.Wh(e))),o&&d?.setRoute(o)}:({fn:e})=>e}},811216:(e,l,t)=>{t.d(l,{Z:()=>d});var o=t(883119),n=t(930837),i=t(140017),a=t(339001),s=t(554786),r=t(785893);function d({onDismiss:e,firstName:l,handleUnfollowUser:t}){let d=(0,i.ZP)(),u=(0,s.HG)(),c=(0,a.nk)(d._('Unfollow {{ firstName }}?', 'unfollowUser.modal.header', 'header text asking if we should unfollow the user. firstName: name of the user to unfollow'),{firstName:l}).join(""),_=d._('You will no longer be able to view their profile, Pins, boards, followers or following lists. They will not be notified.', 'unFollowUser.modal.description', 'explanation of what removing another user means'),h=d._('Cancel', 'unfollowUser.modal.cancel', 'Cancel unfollowing a user'),p=d._('Unfollow', 'unfollowUser.modal.button.unfollow', 'Button to confirm removing a user');return u?(0,r.jsx)(n.ZP,{accessibilityModalLabel:c,footer:(0,r.jsxs)(o.xu,{alignItems:"center",display:"flex",justifyContent:"end",marginEnd:-1,marginStart:-1,children:[(0,r.jsx)(o.xu,{padding:1,children:(0,r.jsx)(o.zx,{fullWidth:!0,onClick:e,size:"lg",text:h})}),(0,r.jsx)(o.xu,{padding:1,children:(0,r.jsx)(o.zx,{color:"red",fullWidth:!0,onClick:t,size:"lg",text:p})})]}),heading:c,onDismiss:e,role:"alertdialog",size:"md",children:(0,r.jsx)(o.xu,{"data-test-id":"unfollow-text",marginEnd:6,marginStart:6,children:(0,r.jsx)(o.xv,{children:_})})}):(0,r.jsxs)(n.ZP,{accessibilityModalLabel:c,mobileHideCloseIcon:!0,onDismiss:e,type:"unFollow_button",children:[(0,r.jsx)(o.xu,{alignItems:"center",display:"flex",paddingX:3,paddingY:5,children:(0,r.jsx)(o.X6,{accessibilityLevel:1,size:"500",children:c})}),(0,r.jsx)(o.xu,{marginBottom:4,marginEnd:4,marginStart:4,children:(0,r.jsx)(o.xv,{children:_})}),(0,r.jsxs)(o.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginBottom:8,children:[(0,r.jsx)(o.xu,{padding:1,children:(0,r.jsx)(o.zx,{fullWidth:!0,onClick:e,size:"md",text:h})}),(0,r.jsx)(o.xu,{padding:1,children:(0,r.jsx)(o.zx,{color:"red",fullWidth:!0,onClick:t,size:"md",text:p})})]})]})}},155087:(e,l,t)=>{t.d(l,{Z:()=>u});var o=t(883119),n=t(454514),i=t(140017),a=t(995917),s=t(554786),r=t(785893);function d({ideaPinImages:e}){let l=e.map((e,l)=>(0,r.jsx)(o.xu,{borderStyle:"sm",color:"default",dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:l}},height:48,overflow:"hidden",rounding:2,width:28,children:(0,r.jsx)(o.Ee,{alt:"",color:"#696969",fit:"cover",naturalHeight:e?.height??1,naturalWidth:e?.width??1,src:e?.url??""})},l));return(0,r.jsx)(o.kC,{justifyContent:"center",children:(0,r.jsx)(o.kC,{justifyContent:"start",width:{1:28,2:40,3:48}[e.length],children:l})})}function u({handleHide:e,text:l,userId:t,href:u,imageUrl:c}){let _=(0,i.ZP)(),h=(0,s.HG)(),p=(0,a.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:t}}),f=Array.isArray(l)?l.join(" "):l;if(0===(p.data||[]).length)return(0,r.jsx)(n.ZP,{duration:5e3,href:u,onHide:e,text:f,thumbnail:c?{image:(0,r.jsx)(o.Ee,{alt:_._('Image of who you followed', 'userFollowingToast.thumbnail.userImage', 'Profile thumbnail of the user you followed'),fit:"cover",naturalHeight:1,naturalWidth:1,src:c})}:void 0});let m=(p.data||[]).slice(0,3).map(e=>e.images?.[h?"236x":"170x"]),g=(0,r.jsx)(d,{ideaPinImages:m});return(0,r.jsx)(n.ZP,{_dangerouslySetThumbnail:g,duration:5e3,href:u,onHide:e,text:f})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/40834-02bc534b2503e0d3.mjs.map