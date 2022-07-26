import {parseBloodsample} from '../utils/blood-sample.utils';

export const rawLabBloodGen3 = `
  +--------+
  |c    oic|
  |cico opp|
  |piip   o|
  |o oooioo|
  |ci   occ|
  | iicpppi|
  +--------+



  +--------+
  |ipo ccc |
  |po  ip i|
  | ioo ioc|
  |p oc oio|
  | cp i   |
  |  pcc i |
  +--------+



  +--------+
  |iic   ic|
  | p  ppoi|
  |c cpcipi|
  | c o cio|
  |iopcic o|
  | cp  cci|
  +--------+



  +--------+
  |ci pco o|
  |cp piiii|
  |ioic ppi|
  | op io i|
  |pccpp op|
  |pcipcopc|
  +--------+



  +--------+
  |ooopc ci|
  |i pp   p|
  |p i oip |
  | c cc   |
  | opcp c |
  |ico iic |
  +--------+



  +--------+
  |ippippc |
  |c cii ic|
  |i   pocc|
  |opicioii|
  | ipopo c|
  | o coc  |
  +--------+



  +--------+
  |i   ippc|
  |i icoppi|
  |pip  ic |
  |o  op  o|
  |oc oi   |
  | ipioi p|
  +--------+



  +--------+
  |c ciiici|
  |i pcii c|
  |ccoip  i|
  |pi cipp |
  | pocp ip|
  |copc op |
  +--------+



  +--------+
  |cc iiipp|
  |pcopci o|
  |oc icpc |
  |cop  cc |
  |   ciop |
  |c op ico|
  +--------+



  +--------+
  |piop  c |
  |opi c pi|
  |ccccp o |
  |i  ipioi|
  | ooco i |
  | occococ|
  +--------+



  +--------+
  |   ppo  |
  |  p ooo |
  | oi  cio|
  |ppoop pp|
  | ioocoop|
  | o ii cc|
  +--------+



  +--------+
  |c cc  po|
  |oo io  c|
  |  ipcip |
  |   ipoii|
  |cpooi po|
  |po i  o |
  +--------+



  +--------+
  |oo p   i|
  |ppocp oi|
  |iipc oop|
  |pc    oc|
  |p   oocp|
  | oc cioi|
  +--------+



  +--------+
  |icpcipoc|
  |  cicc i|
  |cpo ccii|
  |p  oo  p|
  |p iip  c|
  |c po pi |
  +--------+



  +--------+
  | cp op c|
  |pi cpo  |
  | piioio |
  |ipiip ip|
  | oco  c |
  |popiiioi|
  +--------+



  +--------+
  | ooii o |
  | p oippo|
  |ipcipoc |
  |op o c  |
  |poc io p|
  |i iip pi|
  +--------+



  +--------+
  | c cpcpp|
  |oc coc  |
  |pio oi i|
  |cp  pcco|
  | c cpiio|
  |ci     p|
  +--------+



  +--------+
  |ioo  io |
  |ic   cci|
  |pc  icpi|
  |cccc i p|
  |occ p  o|
  |poi   po|
  +--------+



  +--------+
  |o o oppp|
  |cco cioi|
  |opcpi   |
  |o    io |
  | oc iio |
  |o i ocii|
  +--------+



  +--------+
  |iio     |
  |op ppooi|
  | picppcc|
  |cop icic|
  |co  o op|
  |ppp oooc|
  +--------+



  +--------+
  | io o pp|
  |c ccp pp|
  |ppioipop|
  | iioc oo|
  |cpi icpp|
  |coo pcpp|
  +--------+



  +--------+
  |po c cip|
  |cp iicp |
  |ocpi  o |
  |ppioo ci|
  |iccii  c|
  | c  ii o|
  +--------+



  +--------+
  |c  opci |
  |ccc  oi |
  |o  op oi|
  |  iiocp |
  |p ipooip|
  | p pcccc|
  +--------+



  +--------+
  |ioo cppc|
  | pppo pi|
  |o ocpoci|
  |pc cp p |
  |pp oioi |
  | picpop |
  +--------+



  +--------+
  | p c pic|
  |ioo  i p|
  |ccocppoc|
  |o   pc i|
  | iipiip |
  |p  oooi |
  +--------+



  +--------+
  |  i ii o|
  |c  co  p|
  |cippoici|
  |ppp ci  |
  |oc ip   |
  |o ppo cc|
  +--------+



  +--------+
  |oi opiio|
  |popi  cp|
  |cpp i cp|
  |oc p  cc|
  |c po c p|
  |i opocci|
  +--------+



  +--------+
  |cio ip i|
  |  i cc i|
  |   popoo|
  |c  oci  |
  |oio cppi|
  |i coopoi|
  +--------+



  +--------+
  |   icooc|
  |p p opii|
  |  ocio p|
  |cop piop|
  |ccicioco|
  | p  ooip|
  +--------+



  +--------+
  |popppcc |
  |ipo po  |
  |iic  coo|
  |cpii o i|
  |i ic ci |
  | ccp   i|
  +--------+



  +--------+
  |     pco|
  |coipoo o|
  |pciicii |
  |pocp   c|
  |pcoo ppi|
  |pcopp ip|
  +--------+



  +--------+
  |ccc c ii|
  | oipoocc|
  |cc ipc o|
  |coipo oi|
  |oii  iip|
  | o   i  |
  +--------+`;

export const labBloodSamplesGen3 = rawLabBloodGen3.split('\n\n\n').map((rawLabBlookGen3) => {
	return parseBloodsample(rawLabBlookGen3);
});
