import {parseBloodsample} from '../utils/blood-sample.utils';

export const rawLabBloodGen2 = `
  +--------+
  |  i  ici|
  |  c pooi|
  |cp  oco |
  |oc poipc|
  |i  ooo c|
  |pioc ci |
  +--------+



  +--------+
  |c  ci ii|
  |ppiicpoo|
  |poco  oi|
  |c cio oi|
  |o oiicic|
  |oipip  c|
  +--------+



  +--------+
  |cc   cp |
  |picpio c|
  |cpccicco|
  |ocio  oc|
  | iccp oc|
  |c picioo|
  +--------+



  +--------+
  |c p ppcc|
  |o ppccc |
  |c iocci |
  |ioocop  |
  | ci  c c|
  |ppp   i |
  +--------+



  +--------+
  |o cc p o|
  |coio cpc|
  | io icio|
  | iociopi|
  |poii oop|
  |  oi p  |
  +--------+



  +--------+
  |io   i o|
  |piopop i|
  |p cioocp|
  |cooi    |
  |p oc    |
  |c   iooi|
  +--------+



  +--------+
  |cp  c  i|
  |icpi opo|
  |ippoccc |
  |ipcciicp|
  |ocoo oci|
  |pcpc  o |
  +--------+



  +--------+
  |iop ocii|
  |  poicpi|
  |c  p o  |
  | o ipo o|
  |o  oopic|
  |icccpc p|
  +--------+



  +--------+
  |cooici i|
  | ioiopp |
  |   pi  c|
  |cp ocpco|
  |io p cco|
  |ppoooo o|
  +--------+



  +--------+
  |i ip   p|
  | ocoici |
  |ic   oc |
  |c c i p |
  |oip  cp |
  |pppo p o|
  +--------+



  +--------+
  |ooci   o|
  |c   i p |
  |p c oc o|
  |cpoc oco|
  |ocp cppo|
  |cociocic|
  +--------+



  +--------+
  |pcip  co|
  |o   ici |
  | o oooc |
  |c o cipi|
  |coi  cpo|
  |  cp oo |
  +--------+



  +--------+
  |oooi iio|
  |    ic i|
  |occ oi p|
  |ocoic   |
  | ipcoopo|
  |opo   op|
  +--------+



  +--------+
  |o ii pic|
  |  pcoo o|
  |p ppp ci|
  |c   p oc|
  |i cc c  |
  | icic  o|
  +--------+



  +--------+
  |coiioppi|
  |oipp ioo|
  |   ii i |
  |ciooccpi|
  | i iioo |
  |p  iicip|
  +--------+



  +--------+
  |p    cpo|
  |pc cpi o|
  |  ocpco |
  |c p  oic|
  |pp oo cc|
  | ii  po |
  +--------+



  +--------+
  |i ociopo|
  |opoipi o|
  |iicp  cp|
  |o ppcc o|
  |ipciooi |
  |op i ipp|
  +--------+



  +--------+
  | ocpiipi|
  | oioc pp|
  | iicocc |
  |oicp o p|
  | o ico i|
  | o pcipp|
  +--------+



  +--------+
  |opiicoii|
  |   o i p|
  | pic opo|
  |opio p i|
  |p ico i |
  |  ci o o|
  +--------+



  +--------+
  |c  opppp|
  |  oc ci |
  |pcc   co|
  |ciii cci|
  |  cp ooc|
  | copoooo|
  +--------+



  +--------+
  |ici p  c|
  |  coicoo|
  |ooccioip|
  | ip   i |
  |o cpicpp|
  |c o iipc|
  +--------+



  +--------+
  |cpi c cp|
  | i  p o |
  |  pp cci|
  |oi c ico|
  | icp poo|
  |  oo  oi|
  +--------+



  +--------+
  |   cpp  |
  |i ipi co|
  |  p  ci |
  |c  cc oc|
  |o p i ii|
  |oc  i op|
  +--------+



  +--------+
  |o  cp i |
  |pccppooo|
  |   iio  |
  |i ccoico|
  |ccoiioop|
  | p ii  i|
  +--------+



  +--------+
  |iccpp i |
  | p  ocp |
  |p  ccoc |
  | ii i cc|
  |   poi  |
  |i opcipc|
  +--------+



  +--------+
  | icc opp|
  |o  c ic |
  |ipc p p |
  | ciio oi|
  |iopc coc|
  |cocio  o|
  +--------+



  +--------+
  |ocic  c |
  |opci  op|
  |iopc  ii|
  |p ciopc |
  | oo ci i|
  |c   pc  |
  +--------+



  +--------+
  |o i c cp|
  |o    o p|
  |oo  o   |
  |ppo ipio|
  |c   ccoi|
  |ccppoipo|
  +--------+



  +--------+
  |op p o p|
  |coociccp|
  | ci pci |
  | occo cc|
  | c pp ii|
  |o  ocooc|
  +--------+



  +--------+
  |coiiicc |
  |ocp p pc|
  | cip ic |
  |o oco pp|
  |opiiop i|
  |ipcoip o|
  +--------+



  +--------+
  |opcpccio|
  |i p oo  |
  |       c|
  |ci    oc|
  | ppoocii|
  | ccco  p|
  +--------+



  +--------+
  |ipip pcc|
  | op  ccp|
  | i  cp i|
  |ip cocii|
  |oopiioip|
  | o cco  |
  +--------+`;

export const labBloodSamplesGen2 = rawLabBloodGen2.split('\n\n\n').map((rawLabBlookGen2) => {
	return parseBloodsample(rawLabBlookGen2);
});
