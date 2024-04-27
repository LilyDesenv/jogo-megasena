import * as S from './styles'
import banner from '../../assets/images/banner.png'
import * as r from '../../store/reducers/number'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Content = () => {
  const { n1, n2, n3, n4, n5, n6 } = useSelector(
    (state: RootReducer) => state.numbers
  )
  const dispatch = useDispatch()

  const isMarked = (number: number) => {
    if (
      n1 === number ||
      n2 === number ||
      n3 === number ||
      n4 === number ||
      n5 === number ||
      n6 === number
    ) {
      return 'selected'
    }
    return ''
  }

  const getRandomNumbers = () => {
    dispatch(r.generateNumbers())
  }

  return (
    <div className="container">
      <S.Container>
        <S.ButtonSection>
          <button onClick={getRandomNumbers}>Gerar Jogo</button>
        </S.ButtonSection>
        <S.NumberSection>
          <span className={n1 === 0 ? 'empty' : ''}>
            {n1} - {n2} - {n3} - {n4} - {n5} - {n6}
          </span>
        </S.NumberSection>
        <S.CardSection>
          <div>
            <S.Row>
              <S.Collumn>
                <img src={banner} alt="banner mega-sena" />
              </S.Collumn>
            </S.Row>
            <S.Row>
              <S.groupNumbers>
                <S.Collumn>
                  <div className={isMarked(1)}>01</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(2)}>02</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(3)}>03</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(4)}>04</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(5)}>05</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(6)}>06</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(7)}>07</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(8)}>08</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(9)}>09</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(10)}>10</div>
                </S.Collumn>
              </S.groupNumbers>
            </S.Row>
            <S.Row>
              <S.groupNumbers>
                <S.Collumn>
                  <div className={isMarked(11)}>11</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(12)}>12</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(13)}>13</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(14)}>14</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(15)}>15</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(16)}>16</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(17)}>17</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(18)}>18</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(19)}>19</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(20)}>20</div>
                </S.Collumn>
              </S.groupNumbers>
            </S.Row>
            <S.Row>
              <S.groupNumbers>
                <S.Collumn>
                  <div className={isMarked(21)}>21</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(22)}>22</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(23)}>23</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(24)}>24</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(25)}>25</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(26)}>26</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(27)}>27</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(28)}>28</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(29)}>29</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(30)}>30</div>
                </S.Collumn>
              </S.groupNumbers>
            </S.Row>
            <S.Row>
              <S.groupNumbers>
                <S.Collumn>
                  <div className={isMarked(31)}>31</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(32)}>32</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(33)}>33</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(34)}>34</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(35)}>35</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(36)}>36</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(37)}>37</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(38)}>38</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(39)}>39</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(40)}>40</div>
                </S.Collumn>
              </S.groupNumbers>
            </S.Row>
            <S.Row>
              <S.groupNumbers>
                <S.Collumn>
                  <div className={isMarked(41)}>41</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(42)}>42</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(43)}>43</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(44)}>44</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(45)}>45</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(46)}>46</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(47)}>47</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(48)}>48</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(49)}>49</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(50)}>50</div>
                </S.Collumn>
              </S.groupNumbers>
            </S.Row>
            <S.Row>
              <S.groupNumbers>
                <S.Collumn>
                  <div className={isMarked(51)}>51</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(52)}>52</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(53)}>53</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(54)}>54</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(55)}>55</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(56)}>56</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(57)}>57</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(58)}>58</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(59)}>59</div>
                </S.Collumn>
                <S.Collumn>
                  <div className={isMarked(60)}>60</div>
                </S.Collumn>
              </S.groupNumbers>
            </S.Row>
          </div>
        </S.CardSection>
      </S.Container>
    </div>
  )
}
export default Content
