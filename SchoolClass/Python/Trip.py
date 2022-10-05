# import Travel.Thailand

# trip_to = Travel.Thailand.ThailandPackage()
# # trip_to 객체 생성
# # trip_to.detail()




# from Travel import * #트래블 패키지 안의 모든 것 들고 옴

# trip_to = Thailand.ThailandPackage()
# # trip_to 객체생성
# trip_to.detail()

# trip_to2 = Vietnam.VietnamPackage()
# trip_to2.detail()

from Travel.Thailand import ThailandPackage

trip_to = ThailandPackage()
trip_to.detail()