import React, { useState, useCallback, useRef } from "react";

type DelayButtonProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const DelayInput = (props: DelayButtonProps) => {
  const { onChange } = props

  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [viewValue, setViewValue] = useState('')

  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true)
    setInputValue(e.target.value)

    if (timeRef.current !== null) {
      clearTimeout(timeRef.current)
    }

    timeRef.current = setTimeout(() => {
      timeRef.current = null

      setIsTyping(false)
      setViewValue(e.target.value)
      onChange(e)
    }, 1000)
  }, [onChange])

  const text = isTyping ? '入力中' : `入力したテキスト: ${viewValue}`

  return (
    <div>
      <input date-testid="input-text" value={inputValue} onChange={handleChange} />
      <span data-testid="display-test">{text}</span>
    </div>
  )

}
