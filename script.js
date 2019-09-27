const IMAGES = {
  '0': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAACSUlEQVRYhe2XTWgTQRiGP9Za6UGEUsRWK4JV0VJBEBVBrKLYqGihIFW8C560ICJ4iIqpaSlexJM/+IeH5OwPBoRCD8WDgiyKwSJ6iD8NQsKuyc7Mux7c2DHEze502yR03+NH5ptn3u/N7C7RPKtt6qw233uGalg9jaTCuCjr1Lmkf/eGurd4XsQY2wrgOYCfAL4AuG2aZofvTasptitTEepxS6tGRLSZD/4XmnPeD4DZZQKQKRaLXapMfdsOzew5ePzdrIJqGMYKAIYD9k0IMQQgXgIHMOmnX/8Hy51n+HtOCRjA1ZKDnPPDUn1Mqu9V6R2oAEw6zuV1XW8q1RljO6QIxOcU4tX+z1VdBpB1YN7K9Xw+3yqBJoiI+pp7NCKi1PJ1s78Xf7GYryZSFifkuq7rTRLoi2p9YgN75uZS/zj250AujraVOxqIrAsTnk509GLnP7+TM5pOp5tLdcbYTgl01EvvpZEpdVcTu91fywAMS//uI1L9ulTfpwygomfJjRoRUbxr/V940zQ7ABRt27aF4D+ke1Q4br6ORqPKe07TSHDZFUKcBFD+YLIBZC3L2uS29vJ4uzpI5HTc92LOeS+Al86zPgPgUaFQWK0M4VW3lt2oCJvTDobvhg2vJRvuuU/ReGKEYw7VMPraviaQvF6a7q3v3OeO3a1vwGp6f/N8Yx9g4alnJBuObGFr++ji2kcg9aBbCeLMqoHaw4cKSrErM9/9qc5rFUd7Ym1L/Yx85aJEIDB33nj/DE4+PFA7A8Y/3a8f94PUbzSvr37EL0fEAAAAAElFTkSuQmCC',
  '1': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBElEQVRYhWNgGAWjAAJKpHWZBtoNo2DIgd+/fxv9+/fv4///////+/dvKzXNplp6/PXrlx4zM/NuRkZGPkrMWf9yEnXzyKpnXnADf/36pfXv37/X/5EAtUOUYvDz50+Vf//+PYc67iWtHEpyMF8NX42ih5mZWYWBgUHk////7/78+eNMNZfRAvz9+zfi9+/fRgwMDAyDNurRwaCJ+oECWB1qs9l9yHiAbEBK1G/wCRu4ABlNowPtAKqC9yGnhpeHRsEoGAUkArmSAopLgZwc5hFakkyKqhr+Pv9+3pE+nnwU4UFVi3a2PB68seOR5DJ4HTcKRsEoGAWjYBCDafvYR2sQagAAc6+WvYU27AQAAAAASUVORK5CYII=',
  '2': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVRYhe2YQWjUQBSG3y6riC2ligreiofi2ZN4qCDiSbwoCh5E9iQeigiKeih4LFJEPGhREMEibCmoUDyJW0R6aBSkFClSrCwtBdklKVmaOHn/8/Iiw3ZDq7vbVMgHYZOXzMyXmZfJZIkyMjIy/pogCPrMr+ghgK8A6rrNMPPg3NxcIW0/IiJi5iKAUBIAMLW4uLgzvr5+cH8+FVEAoyq0BuAZM19l5psAvseyzHwtFTkbx3EKAEaDIDhkx8Mw7Ld6dTItvw1ZXV3da4m+brW+juVLV1dXMd4XkelOtdMSxpijANa0Nz3f9w+k7bQOY8wxAJ71IJ1P22kdURSdBlC3JAfTdloHM18BwDrchpmLG5faPLl2VAJgJJfLXRcI5fI5EpEXIvIuPi8ibqFQeNWOtloi6a1kTU/zRETd5vM/zzJb+jrzdxzBVraXkZGRsZ0olUp5AEs6gc80nm8yyYcAPoZh2B9fU61WuwEMA1jQ8xUAIysrK7vbJhpF0SlbJAzDw42iADwAz3Wb1th7IiLXdXsBzGrsB4AJAPN6/MFxnM1/BN4Yf5P4pgIwppW+1N/hJqLz8XGtVuvR2KyWf6DH4/HHXrlczgN4xMy3KpXKrk2LJqFDVgfw0/f9fQAMgKVSqfTnxpr06AyAkJnPqWhFRKSji2hmLqrIqDb6VkQkiqKTtmiTPP0SBEGfljEcRV6z+u/tudCeNQeAKRU7oeKXVGTMFrWH3hgzoLEJraOzPRoEQR+ApOVbvVqtdjcT9TyvV2PfVPR+Qo4+YeY7y8vLreUoMw/Fw2jl33MACyIizHzZErVz9JPGJomIXNftaXjqx62nfqpcLrc2/LGQMWag4QYuxo3Eog29bQBMb/k8ui24e8ZJ54+rjP+dyae1LHUSeTx0dlv1zu3B43kiot80rocwagpknwAAAABJRU5ErkJggg==',
  '3': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIUlEQVRYhe2XX0hTURzHf3csGxqilTLKRwsJsSSCiCKE6imDpHoKEQoToqd8WAUiWUiYlVT0EASWLyVRIgb24t4sIn1IEvHfYrFu5cZdQ2X33t/39tA25t2d7u6P26oP7GHn/O7vfH/fc8495xIlibe11JLsszlBVf2u7BZwccuGGAG1PTfy29VEOV3TECn03WSSRT8dmctPtxplZ9aEnxxqS8/YwWCwEsAjANMAlgF4AYwzs8Pn8xWnZRA93QvGzgWO3jFsZ+bzABQtDgBmA4HA5oyINQOA+yFBXgB3mbkZQAeAb1FiO7Ktk9xut01VlMd612RZrokS2p/2gS8X70to4da9HVo1bnl5uSKnHG0bXowIZuazzNzEzA4AkyGR036/vySbGmMA4I/eSCqrzyVJSklk4OBM+l+LeqEhRwdcLldB2gczYntZmWFVc10/VrQ7nU5Le3s7+Xy+YmZuCYtlZkcq49ubi8y5erN2MeaBpaWlbaqqnjJqT+eut5oJvjZehOj/kiSV2Gy2YUEQqgGMEdEbTdPcRLRVEIRzRESARoJAn1MVmhIej8cGYMDoRGJw2M1PkiRl5hg1i6qqx1nhlwDcAIIAvgMYZeYWj8djy7a+/+jxlk7k5904Ljt3N/5lFa0Xhyr3puxcHyuRHD0nvmZuJgoaN+b3NOsuGgqAWQCdoigWGsVExU4l2r8apo5QTdN+EdFrIrIR0X5BEBzl5eVHRFE8bLfbl3QxYTxxchj2m6Zv6sKKJaCv3uVyFQAYDN2OrhrF6DHjYNIYDSLLcnWo/X1UjB9Ab9SvU5cj0s+sPAPQeex2mr7b4wkVRbEw1D4fjsnUGk1JqCzLezRN01RWPsSLWStHoiRtuSiKhVartYuISCDLq2TzJIqpXU9EdgC99GfXHxAEoULTtDGv13vPICaMx2KxXDErbHqi3rKjehBrR+pA6CIcmj4GMA/g1sLCwqZwDANrrtG0rsmmh9fz+3RKlpmqyZjC+4fP/JtmZJQvrSa/1+MxNjCyIlH7x6CFiKjh0ovcmbbxugcxYrqfjOaOwPXi59CwqaJ/A1TJDHZ8IM+4AAAAAElFTkSuQmCC',
  '4': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeUlEQVRYhe2YTWgTQRTH30wXoqsVj0WhIIKtItqbB28e9KQnQUGwQTwoiFg9eKqHqgex4sfBa8hFMOBnKVoLliIigqIIEaxCDfEjhEizGrNsuvMfD+6WJd1Nd5uP3bb5HV/eZn7zMvPykg6KMN/UW/yj2cm+UFqG7dKmboZOdfGwHdo0BdM0D0gHAEadr//ctyH8j/7F268qgGlbUkDME20KTw+PBNo9gMtWFX95VdSNIXaydVU2DGMLAENKKYUQ8SCiLQXAuCU2SURUS3Tr4x3hnFMhxEFLyjAMo5eotmgoFAqFtQC+W1IX7XjkRAFcs4Q+Z7PZVXZ8saK7B3c251gAmJUL0IiqBrJ/dPrNvHzGmOKWC/ibzG7cG/blwDa9v8un+w7B17u6IISIu8U55wkiIinlBwADiqI8X+waDef1/fG56kTuMnmxZETbLEvWXD3flKZ8fVuCExGd2DUR/szqh9jw5qUhunJIp9OKEOIsgHcAdAAagAnTNPfaOVbv/FT9rDPuldMQ8vm8CuCl/VMDwAiAUQC6PdUHFZ3pTzX+LAK4Yi0wViwW19nxSqXSB+BmuVzuCirqd+3bx1dzFkA0wxjr1nV9o6qqP7zyrG/O30T0kIgIQnLewcAYOyqlnOKc91g5U5zzHr/r+wbALADNRUpWV6vGXLpgRQfj5+o7DgAyUkqp63q3I5YEkPQjUe9l8m1vmuYdIqJYLJbQNG09ERHnvL9UKg14PfNs/6XWN+5cLqcCmKy69WMA/lixJFEE2hPRXB894+ijfwG8EkIcS6X+t5pIiC5LjmQerLzBIjnTG81Nb38S7F9EIiK60LknmrtpUyf/AOkf0nLBl299AAAAAElFTkSuQmCC',
  '5': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKUlEQVRYhe2XsYsTQRTGvwnZkJAoxyFyxTUGlStEsU8hIpbaCIK1hWIpWNhZXelfIJyFxUVURATlPDmxTSEeQSRYeAE1nGiWhN1MduZ7NhsJS+T0dnJR3B8s7Myw7337Zt7jDZCRkZHxR8gOkHya/Kb24kTunxC6G/IujACAiLwVkdsT5rdc+UiF68j9CqdnZWNjIxdFUc1ae8kYc7rdbhdd2k/FWEQ3Sb5LnM/Pxpgzs9YI4LeSKdRaH03rJ/XWi8iKiGyJyEoURSc7nU5Za31IRB4CgFKq6HnetbR+pkav15sfi+rztPZSR1Rrfdhaezk5XyqVjo0Nu2n9pKqj3W53v+d5T5RSSySvishjAF+UUkcA/BRP8n5aoakIw3CR5OYOyXRnpiJHtFqtgrX2Csl1ktskI5LfSa5Zay84d3hu4freNwoZGRkZ7omL+fvkOwBYa2/Gc6+bzWY+uf5XCDXGnCJpSX7s9/sHJv3IbnBa5IMgWMjlcqsABsaY85VK5asr284udwDyxWJxVSl1kOTFQqHwxqFtd0KVUlUAVRH5FgTBS1d2R6Tdeo4PROSZUmq+XC7fq9frs+sdfN+fA4DBYFCNE+RVLFBIfgAAkg/i8a3Rd3ua9cPh8DhJn+Qjkm0REWvtjaQQ3/fnSLZJWmPM2bF1n+Td+FmemlCt9VLcc/ZiIcuNRiOfFAoAURTV4hK1HYbh4oRmejY1NeO/5dO+9ewakzEtfgAPzUfvHLk+YQAAAABJRU5ErkJggg==',
  '6': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQklEQVRYhe2XTWhUVxTHT0NpxYQyxVSLWMFQRbS14MKdLkJRkCIuRFzYghsVBI0gElIoA6ULCSIiui3iQoqIQrAhxEoEBaGRFkKQQaJIlESSSd40nbyPuef33Nxnb54JMZOZfND5b+bd8+6758e555x7R2QJ6divnXXvNfH3e/veb2JNNdVUPYVh+CVwFXgFlIAh4FoYhpsWm+2tjDG7gKKqxmkZowPZbHaxEUUKhUIGeJ2AAddV9ThwGfBV9fBiM4qIiKq2OpDt7rsgCJqWRDRFRICHFtL3PC8TBEGTqh40xnw7ODi4Yrbv4z+OL8whA4xb0D7gZ0CdCL82xuxeEJC0Vv1zdEoEEjDAf6eSrD0Mw80VA9jzdXNZWwAULFCsqq2e52WKxeJq4KoDe6lioOUK+MvC5Fy753kZB7Rrvn4qkch37e+mKIq2Jcb6+nq30XsV8DM/2ROpZCM3pKpnVbUVeJVEVFUPLTjYiSvfv7MLqtoyXSFZ+JtV7aXd547MKS2MMfuA+0ABCIE+VW3p6empXcbLVuOB9fOO3seZYnV24OLWk8t3a0/FVczLLeHO5RuZ/50efH66urvlNO1brh14kj7f7ViNMc3pNZJ5w8PDK1X1J6Af8IEi8FhVW3p7ez+sBKifz+cbRESiKNrm2HPpuUZ1aGJiovGr9Z/WuaD5fL4BeGzHI0AH0OXcvrp+vP70o7JBgaI9rw+LiAC/JLbpQK29I7VGDmi3z3fGxsY+Sd7bK+Gf1sfJ+YDm7O29w4IOAL/NsPUvgJzr1FnjRRzH8eTk5FoRkSs7vqi7tetlnYhIqVTaYec9FBF51n5jbjmdOFHVNiA0xjTHcRwbY/bPAJqLomi7PevDJE0saAkYn87P6Ohog533fI6xnOo8CIIm+zwAFP7ufrZyJlAREVU9Y8dP0hH1fX9d2k86omWDiogkeQRcS79Lj7PZrADdbtEB5+1zt+d5lcnR2998MKViRf6LkjFm72ygIiIT/46sBUZSVZ/8bUmqvtOt+v7+/vJalOvc9/11QD5ZbDZQERFjzHfpPgokfTS0vbT8Ptq56lHt3F/WOnK5bWF38MLGrqWfMt6GvupDfrbmh6UfieWiN+6+X/90sIh0AAAAAElFTkSuQmCC',
  '7': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAADR0lEQVRYhe1YXUgUURS+s4iJlI/S/1NFhBSEhC9BgQ8FCdKDRBgURZAULP09RMgSVA8mERJSvfRDWIaUSQ9WlCUhlRJmE8gSGfPgsKKu6Kgz955vevCOjeO2O7u6utl+IHj/vvOdc889984ylgbUPX4fSAdvRuDc7ftL17kssvADALV2AgAwU+H+VrZi+oAt1ElDKouKWkan1+XMVQERNQQCgR5vv6Io2xRFCcrmm7naSRsAPHS2Xgixxzt++MrR1Hbze3tZymnwZNW1GWsNwygEYMr8DIdCoVSp0wsA1U40iSiYeMUiQFXVHAD9MppGNBotWFABfHelr9QgooOuslSfbl0pA0CHI9SyrC1/nXipPqHjK0+NzX/5zGs4EOCcF7ui+XbejcRD0d7Nvr0C8GDqAMEWQuxPp66UMTY25i5JWltbW2a8L3cei8wQQkQXXSXpwmLp8oWaR2cCz43izIhkFnGg1H/N7tL/hUOtS2XLY3zzDAC4E4lE8hljTNf1fCKqBqACmABgAOgiomBnZ2dOAp5bDs/g4OByADcAaABMAD8A1Ph+cUnSEQD35F9Y9tVK8i6X4RYArQBGZF+rqqo5CXiuM/bnKwDABwDNADR5YVQlI7TXaRuGUSj7VAA18v8XQ0NDBe45AD67H8vxeKTQUQBGX19fLmNTb1kiqvT9ReA2EAqFmBCi3OX5L9u27fHx8dXedZzzHXJeRwKeDsYYE4J6ZPsngDohxD536vgSGiO/bCFEOQAOYDjWOl3X8x3DcXhICFHOGGOWZW0F0O0Z1zjn25OJqDu3ajjnJYwx5kR0YmJirTOfiCoAtAohSp3Ix+Dpt23bFkKUeu1ZllVEREEndQC8S0Zob6wxAFfl+KtoNFrQ2NgYANAs+7jM0dNeHiI6Lts3XQ6edALA2NRTUc6Z9TtB0kJ1Xc8H0O499a6tG9Y0Lc/LEw6Hc2UZ4qZpbnDerwBsAB0AGlxV4fKchTpGiegsgG5XHf0C4KMgMWya5qZYPERUJfuaGGOMc14iy9KAq45WO+XNF8Td17Our5cnPsW90jRNy5ucnFzv28i/gHUbK2I6vWtZbWbe78qRZ5kpbE5oerpm2qvH50uWoIdZzMZv8MAzH3NLp1UAAAAASUVORK5CYII=',
  '8': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIUlEQVRYhe2YTUhUURTHjzMFpdIHhIVYSKuCahNUSEGkSJBBRCCSgUVtpJWURJFMKxGhgmgRLiLNyiEqkApXYS0qhgiRwcKsxAZ1MTk5H29m3j3/2+Y+fTxnnA/H3gz538zj3DN3fufc+849d4gKSZsf33TYzfD/ab/zXU6yPj30JT9X71DfmfwAO7F6dpXdDGkrHo/vAdADYBxADEAYgBdAZygUKrObj4iIhBBHAcSkEsDGoxQMCcCnaVpFJnO67l3O/XYBMDIPiX5mbmbmFgDDJvvdnP7o8aq1GUcCIKxgRsz2cDi8xRxA7iizFICXCiYshKh1uVw0MTGxhplbDVBmbiEiqgs+XPqSPvV0ZDVJJBIpB/BxHkpMAwgqeAmgy+v15kdliMfjuwD8kBYBGAiFQpsMv6rqYvtqqq7rVcY+FSyCALoA9AHQFezYn9Av+0uUsewAZjRNq7jQOOogIhJC1Joy22k3JwHQFMyo2+2eW9poNFppAn1tJyMREVnq5SAzX2TmVgBjy1ZHs5EQ4ggAjU0nkuWFGo9EIuWG/7727fZUgBJvmSMajVYCuKXO9yAAP4BPzHwpEAhs+OdQGL+dsrwMtp3NeQkqr36VH61iTrVz6/rCjOraxrcpwW98b0vqc+fbUOaBx3c3F2a2VrScSlLEv5rHAfgSfc+wG6eUrusHzD7MfMo40VJxpNybUspuKWW3ep5Vz8/SiNE8xwMiIqfT2WC2FxUVnVbj99OeTDTvXRTamkmLfdGMqpNLApg0GpdAILDOuLH6/f7StEFTKVvQ4bpaBxERgEEppRRCHCYiYuYm5dObNdTvJ9cXZDcR6PmaSkci0PpHJQvszHxO2boU+IACr8kaNJGSZVT92TDz80V4Lripqaliq7/f7y9Vvn5N0yoAMACfuYddblCPeUmJiJi5Ufk/t/j2Go20+uzIGGTyWE9WL5MQ4qQaiwHoBzCgssXWcmS+nkgpZSwW25ExaColAvW0lxr3ozoA7wHMqF70ja7rB61zuN1uBwCfmsuTc8il6sO2ppVeIqmuXK0vzOyMNnwuTPAVFYr+Arv/gy3wQJpOAAAAAElFTkSuQmCC',
  '9': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD1ElEQVRYhe2XXWhcVRDHD0sMRbRI0BCKFSlVKwQRFBvFB7EiEp/8QLQUCdKHINUnEamhRkKepBTRB30qIiVkgx9FSpESmhDjixskpEFDkG4ItaZJNun27r25H/O7vswJx2U3ba2ba0v+sLBn7syc/5mZc84cYzLE51+fymU5/3Wha++3jSf7wMGHcj8/+fDNE5WbApcKBxoe0XPdY9lk7fQfx7KZ2PO8u4FPgTkgBBaAgTAM92RCqBZ8328D5tIaACpxHHdcj7/vf/m9MdEGjjvExkTkEHAUiFU2UygUmhoy+Ua4bfzFf6wYWFRCc7Ozs81WLiLv2gUkSdK56USr4URu3JX7vr/DifTRrPitA/hNyYiIdC8tLd0RBMF9wKBD9GQ9+5bH/tycE0BEDtXZSIHz/8ymkLkagH5bAkrssoi86Yy/u9E5/pOw53K5D4Mg2Ckir4jIS+VyeWeapn85KucufXF/9j2B53mtpVJpux2PjIzkgFEb0TiOn8iS3zqAE3or9YnI28CYk/Yfs+ZnjDFmbW1tF1BjM0kKzPi+vyNrjutIkqQTGAau6F0/A/S75bCpOPLR2g1tiP6pN/69/d7j72S/G6tw/q1CYziN7rvzf7fYhmJ8V9fmLPie9n23TmR/muy4dRazIXp7e9eb4CAI7rVyvXFO2XGSJJ1644wCfdVNR6VSaQVWANHzdQWouD7jOH5a7aZE5INa3Veapunq6updNckCA2mapiLymjHGhGG4Wx1esc8JoF91Dk9PTzcBk9rFv6zfB9Wm3xhjROSgjoeMWe8DJoE0juOOJEleAL5yfr+q/sr8/Py2mkRtawZ8puNuez3GcfyUEhnV8ePGGBNF0SNADFwUkf1qP2mfJZqpMV3Ms7Z/Bb6snr9cLrcAFzQQ++um3/f9NnUyoaS+AcaARRHp0QgGwHI+n1/fFCJyxGlC4iiKHnX9hmG4x7laV4CFWmkFhtTHYF2SjvIUIKVSaTuwDHwMDAFn4zjuUEcDro3nea3O22m0jt8+uxgReb36u4gcUPsL5XK55VqIfqLO3td0PaMlEIpIj37rqrIZsJ29W+MuisVis+qcr/6mb6zLQJokyfNXJWmMMUmSPKcOF4GgWCw2h2H4oMoW0jRN3dYtSZJXbblEUdSuKV6uVCpt1b5Vb8aV5fP5HHDW3RsWh4e31T9zJ84s3G4fZsCwlQMXVTZtZXoULQJhFEXtxhhjjxvgh2shalNua9M9ATzPa90wqsBpTWGPIzuhzo45spPVeoVCoQmYqFUidYi+V+8cDcNw94ZEt7CFLWwhe/wNDGfYvTIPL4cAAAAASUVORK5CYII=',
}

function compare(img1, img2) {
  return new Promise(resolve => {
    resemble(img1).compareTo(img2).onComplete(function(data) {
      resolve(parseFloat(data.misMatchPercentage));
    });
  });
}

async function login() {
  let settings = await loadSettings();
  if (!settings.username || !settings.password) {
    return;
  }
  let forms = document.getElementsByClassName('js-form-login');
  if (forms.length != 1) {
    console.log('Want 1 <form> #password-input, got ' + forms.length);
    return;
  }
  let form = forms[0];
  let inputLogin = document.getElementById('form_login');
  if (!inputLogin) {
    console.log('Could not find form_login');
    return;
  }
  inputLogin.value = settings.username;
  let inputPassword = document.getElementById('form_password');
  if (!inputPassword) {
    console.log('Could not find form_password');
    return;
  }
  let uls = document.getElementsByClassName('password-input');
  if (uls.length != 1) {
    console.log('Want 1 <ul> #password-input, got ' + uls.length);
    return;
  }
  let lis = uls[0].children;
  if (lis.length != 10) {
    console.log('Want 10 <li> inputs, got ' + lis.length);
    return;
  }
  let buttons = [];
  for (let i = 0; i < lis.length; i++) {
    let children = lis[i].children;
    if (children.length != 1) {
      console.log('Want 1 child for <li> # ' + i + ', got ' + buttons.length);
      return;
    }
    buttons.push(children[0]);
  }
  let password = settings.password;
  let codes = [];
  for (let i = 0; i < password.length; i++) {
    let number = password.charAt(i);
    let underTen = 0;
    let min = +Infinity;
    let found = '';
    for (let j = 0; j < buttons.length; j++) {
      let img = buttons[j].style.backgroundImage.match(/url\("(.*)"\)/)[1];
      let code = buttons[j].getAttribute('data-matrix-key');
      let mismatch = await compare(img, IMAGES[number]);
      if (mismatch < min) {
        min = mismatch;
        found = code;
      }
      if (mismatch < 10) underTen++;
    }
    if (underTen > 1) {
      console.log('Found ' + underTen + ' images with < 10% mismatch. ' +
        'Too risky to submit, account could become locked. ' +
        'Refresh to try again or change password to avoid ' + number + '.');
      return;
    }
    codes.push(found);
  }
  inputPassword.value = codes.join('|');
  form.submit();
}

login();
