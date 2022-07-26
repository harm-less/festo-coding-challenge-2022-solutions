import {parseBloodsample} from '../utils/blood-sample.utils';

export const rawLabBloodGen3Clean = `
  +--------+
  |i pcpooo|
  | oipopoo|
  | p oc i |
  |pcppp  p|
  |o io p i|
  |oo ici i|
  +--------+



  +--------+
  |ocpo  pi|
  |  cp c  |
  | o  icc |
  |o o poi |
  |oo ic   |
  | cpo  pi|
  +--------+



  +--------+
  | i oococ|
  |p    co |
  |pi i  ip|
  | cp pppo|
  |pcicp ic|
  |cpiic i |
  +--------+



  +--------+
  |c  co co|
  |oppcocoi|
  |cpc  i o|
  |pipoip i|
  |o   o i |
  |  oi  po|
  +--------+



  +--------+
  |  c  op |
  |ciipcppc|
  |c io cip|
  | p i oi |
  |  poicpi|
  |  o iop |
  +--------+



  +--------+
  |oc opc o|
  |cpiic ic|
  |oic po c|
  |  o ip p|
  |piii icc|
  |  ccccpc|
  +--------+



  +--------+
  |i  oi  p|
  |cpopoiic|
  |p  op  i|
  | pccc  p|
  |ocppcp  |
  |ppoppii |
  +--------+



  +--------+
  |oipoi ii|
  | poo c c|
  | ocpi cp|
  |ppc  coo|
  |coppc op|
  |ci   o c|
  +--------+



  +--------+
  |ci iciic|
  |pcpop   |
  |ciocpcic|
  | cicp   |
  | piipiop|
  |c p pp p|
  +--------+



  +--------+
  |ccooip c|
  |p  iiiic|
  |cp   cii|
  |i  pc   |
  |  iico i|
  |p  icp o|
  +--------+



  +--------+
  |co oi oc|
  |    c ip|
  |p  ci ic|
  |c c ci  |
  | o pp   |
  |oiicoi  |
  +--------+



  +--------+
  |po o  co|
  | i  p pc|
  | pc pi  |
  |  poiooo|
  |icoi oip|
  |o  op cc|
  +--------+



  +--------+
  |io  pi o|
  | pp  ici|
  |ici icc |
  |c oi coo|
  |pi oicpp|
  |p  p c  |
  +--------+



  +--------+
  | ip c co|
  |  c cppo|
  | occ oc |
  |  op ooi|
  | pc     |
  | io  o  |
  +--------+



  +--------+
  |ciocoio |
  |pc p  op|
  |cp opi  |
  |i po  c |
  |ci iiccp|
  |p   co  |
  +--------+



  +--------+
  | pic    |
  |cc  io o|
  |ioc c ic|
  |  i p oc|
  |oicip  i|
  | o  i co|
  +--------+



  +--------+
  |cpp p ip|
  |cpopipo |
  |i c i oo|
  |c cc  ii|
  |p  ico  |
  |   pc o |
  +--------+



  +--------+
  |i  o p c|
  |   pcipi|
  |piopp p |
  |o cpcpi |
  |po io op|
  |  cpccpc|
  +--------+



  +--------+
  |i ppc  c|
  |occccc  |
  |  p pic |
  |cc pocoo|
  |c op pip|
  | o ci   |
  +--------+



  +--------+
  |cc coco |
  |c  ipic |
  |i ipio  |
  |pp  c pi|
  |cp    pp|
  |i i op c|
  +--------+



  +--------+
  |o cii oi|
  |oo c io |
  |pcoip  o|
  | opo    |
  |opcopic |
  |  p pc  |
  +--------+



  +--------+
  |c    c o|
  |  o   co|
  |ci o i i|
  |c po   p|
  |cooc  pp|
  |ppococc |
  +--------+



  +--------+
  |o  ippo |
  |p i ocp |
  |p   o  p|
  |c cio pi|
  |  pop oc|
  |  oop op|
  +--------+



  +--------+
  |io  ii c|
  |o  co  i|
  | copp  c|
  | cp  ocp|
  |i cc ioi|
  |icio   p|
  +--------+



  +--------+
  |   iocco|
  | ccoioc |
  |oici i  |
  | o ip c |
  | i ic oo|
  |cpii cip|
  +--------+



  +--------+
  |   p i p|
  |i i   co|
  |cppc ip |
  |ic  cc  |
  | oppccip|
  |ci  pcpp|
  +--------+



  +--------+
  | pccic p|
  |cppioc  |
  | ip ccp |
  |cpc  i c|
  |op     o|
  | o oci c|
  +--------+



  +--------+
  | ip  pii|
  |ioc pc c|
  | coio p |
  |cp  c   |
  |   p co |
  |iip i io|
  +--------+



  +--------+
  |ccciiooo|
  |p icc   |
  | p p io |
  | popo  o|
  |ccoo opp|
  |op   ppp|
  +--------+



  +--------+
  |pp pioo |
  | cii pcp|
  |oo   i  |
  |op ioi i|
  |c ip  ii|
  |o p ioip|
  +--------+



  +--------+
  |  i     |
  | pioop  |
  |pop p op|
  | ippcoc |
  |oi i  c |
  | o o i o|
  +--------+



  +--------+
  | oioccic|
  | ci  p c|
  |ciccccoc|
  | opiicii|
  |p   i o |
  |i i oo i|
  +--------+`;

export const labBloodSamplesGen3Clean = rawLabBloodGen3Clean
	.split('\n\n\n')
	.map((rawLabBlookGen3Clean) => {
		return parseBloodsample(rawLabBlookGen3Clean);
	});
